const express = require('express');
const wss = require('../servers/ws');
const {getWsClientByName} = require('../utils/wssUtils');

const router = express.Router();

router.get('/register/:cp', async function(req, res, next) {
    const cp = req.params.cp;
    const ws = getWsClientByName(wss, cp);
    if (ws) {
        ws.send(JSON.stringify({data: 'Test data'}));
    }
    res.send('');
});

router.put('/heartbeat', async function(req, res, next) {
    res.send('');
});

router.get('/heartbeat', async function(req, res, next) {
    res.send('');
});

router.get('/cp/:query', async function(req, res, next) {
    res.send('');
});

router.post('/cancelReservation/:cp', async function(req, res, next) {
    const cp = req.params.cp;
    const ws = getWsClientByName(wss, cp);
    if (ws) {
        ws.send(JSON.stringify({data: 'Test data'}));
    }
    res.send('');
});

router.post('/changeAvailability/:cp', async function(req, res, next) {

});
router.post('/changeConfiguration/:cp', async function(req, res, next) {

});
router.post('/clearCache/:cp', async function(req, res, next) {

});
router.post('/clearChargingProfile/:cp', async function(req, res, next) {

});
router.post('/dataTransfer/:cp', async function(req, res, next) {

});
router.post('/getCompositeSchedule/:cp', async function(req, res, next) {

});
router.post('/getConfiguration/:cp', async function(req, res, next) {

});
router.post('/getDiagnostics/:cp', async function(req, res, next) {

});
router.post('/getLocalListVersion/:cp', async function(req, res, next) {

});
router.post('/remoteStartTransaction/:cp', async function(req, res, next) {

});
router.post('/remoteStopTransaction/:cp', async function(req, res, next) {

});
router.post('/reserveNow/:cp', async function(req, res, next) {

});
router.post('/reset/:cp', async function(req, res, next) {

});
router.post('/sendLocalList/:cp', async function(req, res, next) {

});
router.post('/setChargingProfile/:cp', async function(req, res, next) {

});
router.post('/triggerMessage/:cp', async function(req, res, next) {
    res.send('Command is not supported yet!');
});
router.post('/unlockConnector/:cp', async function(req, res, next) {

});
router.post('/updateFirmware/:cp', async function(req, res, next) {

});

module.exports = router;