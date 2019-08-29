const {generateOCPPAnswer} = require('../../utils/wssUtils');
const {statusCodes, messageTypes} = require('../../constants/occpConstants');

const heartbeat = ({ messageType, uniqueId, action, payload }) => {
    const payloadToSend = {
        currentTime: `${new Date().toISOString()}`,
    };
    return generateOCPPAnswer([messageTypes.callResult, uniqueId, payloadToSend]);
};

module.exports = heartbeat;