const WebSocket = require('ws');
const _ = require('lodash');

const {errorCodes, messageTypes} = require('../constants/occpConstants');
const {generateOCPPAnswer} = require('../utils/wssUtils');
const ActionRouter = require('../occp/actionRouter');
const Station = require('../db/models/stations');

const wsOptions = {
    host: '127.0.0.1',
    port: '9000',
    verifyClient: wsVerifyClient,
    handleProtocols: wsHandleProtocols,
    clientTracking: true,
};

async function wsVerifyClient (info, cb){
    const { req } = info;
    const path = req.url.split('/');
    const cpName = path[2];

    const station = await Station.checkCPRegistered(cpName);

    if (path[1] !== 'occp') return cb(false, 404, "Path is wrong");
    if (!station) return cb(false, 404, "Charge point not found");
    return cb(true);
}

function wsHandleProtocols (protocols, req){
    if (protocols.includes('ocpp1.6')) return 'ocpp1.6';
    return false;
}

function heartbeatWS() {
    clearTimeout(this.pingTimeout);
    this.pingTimeout = setTimeout(() => {
        this.terminate();
    }, 1000 * 60);
}

const wss = new WebSocket.Server(wsOptions, () => {
    console.log('WS server started on port 9000!');
});

wss.on('open', heartbeatWS);
wss.on('ping', heartbeatWS);
wss.on('close', () => {
    clearTimeout(this.pingTimeout);
});

wss.on('connection', (ws, req) => {
    ws.connection = req.url.split('/')[2];
    ws.on('pong', heartbeatWS);
    ws.on('message', (message) => {
        const actionRouter = new ActionRouter(message);
        const uniqueId = JSON.parse(message)[1];
        const res = actionRouter.processMessage();
        if (res) {
            ws.send(res);
        }else {
            ws.send(generateOCPPAnswer([messageTypes.callError, uniqueId, errorCodes.notImplemented, 'Unknown action', {}]));
        }

    });
});

module.exports = wss;