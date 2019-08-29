const {generateOCPPAnswer} = require('../../utils/wssUtils');
const {statusCodes, messageTypes} = require('../../constants/occpConstants');

const bootNotification = ({ messageType, uniqueId, action, payload }) => {
    const error = {
        state: false,
        description: '',
        details: {},
        code: '',
    };
    const {
        chargeBoxSerialNumber, //25
        chargePointModel, //required 20
        chargePointSerialNumber, //25
        chargePointVendor, //required 20
        firmwareVersion, //50
        iccid, //20
        imsi, //20
        meterSerialNumber, //25
        meterType, //25
    } = payload;

    console.log(chargePointModel.length);

    if (isNaN(Number(uniqueId))){
        error.state = true;
        error.description += ''
    }

    const payloadToSend = {
        currentTime: `${new Date().toISOString()}`,
        interval: 14000,
        status: statusCodes.accepted,
    };

    return generateOCPPAnswer([messageTypes.callResult, uniqueId, payloadToSend])

    //currentTime, Interval, Status
};


module.exports = bootNotification;