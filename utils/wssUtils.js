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

module.exports = {
    getWsClientByName,
    generateOCPPAnswer
};