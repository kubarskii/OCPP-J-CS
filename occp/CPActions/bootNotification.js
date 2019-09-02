const {generateOCPPAnswer, checkTypes} = require('../../utils/wssUtils');
const {statusCodes, messageTypes, errorCodes} = require('../../constants/occpConstants');

const bootNotification = ({messageType, uniqueId, action, payload}) => {
    const payloadPropsTypes = {
        chargeBoxSerialNumber: ['string', 25],
        chargePointModel: ['string', 20, true],
        chargePointSerialNumber: ['string', 25],
        chargePointVendor: ['string', 20, true],
        firmwareVersion: ['string', 50],
        iccid: ['string', 20],
        imsi: ['string', 20],
        meterSerialNumber: ['string', 25],
        meterType: ['string', 25],
    };

    const error = checkTypes(payload, payloadPropsTypes);
    if (error) {
        return generateOCPPAnswer([
            messageTypes.callError,
            uniqueId,
            errorCodes.protocolError,
            'Protocol error',
            error]);
    }

    const payloadToSend = {
        currentTime: `${new Date().toISOString()}`,
        interval: 14000,
        status: statusCodes.accepted,
    };

    //currentTime, Interval, Status
    return generateOCPPAnswer([messageTypes.callResult, uniqueId, payloadToSend])
};


module.exports = bootNotification;