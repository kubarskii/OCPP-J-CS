const _ = require('lodash');

const getWsClientByName = (wss, connection) => {
    const ws = [...wss.clients].filter((webSocket) => {
        return (webSocket.connection === connection);
    });
    if (ws.length > 0) return ws[0];
    return null;
};

const generateOCPPAnswer = (obj) => {
    return JSON.stringify(obj);
};

const checkTypes = (payload, propsDescription) => {
    const error = {};
    for (let prop in propsDescription) {
        if (payload[prop] && (typeof payload[prop] !== propsDescription[prop][0] || payload[prop].length > propsDescription[prop][1])) {
            error[prop] = `Property is not valid`;
        }
        if (!payload[prop] && prop.length === 3 && prop[2]) {
            error[prop] = `Required property is missed`;
        }
    }
    if (_.isEmpty(error)) return null;
    return error;
};

module.exports = {
    getWsClientByName,
    generateOCPPAnswer,
    checkTypes,
};