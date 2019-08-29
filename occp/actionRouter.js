const _ = require('lodash');

const authorize = require('./CPActions/authorize');
const bootNotification = require('./CPActions/bootNotification');
const dataTransfer = require('./CPActions/dataTransfer');
const diagnosticsStatusNotification = require('./CPActions/diagnosticsStatusNotification');
const firmwareStatusNotification = require('./CPActions/firmwareStatusNotification');
const heartbeat = require('./CPActions/heartbeat');
const meterValues = require('./CPActions/meterValues');
const startTransaction = require('./CPActions/startTransaction');
const statusNotification = require('./CPActions/statusNotification');
const stopTransaction = require('./CPActions/stopTransaction');

class ActionRouter{
    constructor(message) {
        this.message = JSON.parse(message);
        this.data = {
            messageType: this.message[0],
            uniqueId: this.message[1],
            action: this.message[2],
            payload: this.message[3] || null,
        };
        this.routes = {
            'Authorize': authorize,
            'BootNotification': bootNotification,
            'DataTransfer': dataTransfer,
            'DiagnosticsStatusNotification': diagnosticsStatusNotification,
            'FirmwareStatusNotification': firmwareStatusNotification,
            'Heartbeat': heartbeat,
            'MeterValues': meterValues,
            'StartTransaction': startTransaction,
            'StatusNotification': statusNotification,
            'StopTransaction': stopTransaction,
        };
    }

    processMessage(){
        const performAction = _.get(this.routes, `${this.data.action}`, null);
        if (!performAction) return null;
        return performAction(this.data);
    }



}


module.exports = ActionRouter;