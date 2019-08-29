//TODO HTTP server with REST
//TODO SPA Application for stations management
//TODO CREATE ERD - TOP priority
//TODO new Date().toISOString(); Valid DateTime format for occp

//Call [<MessageTypeId>, "<UniqueId>", "<Action>", {<Payload>}]
//CallRes [<MessageTypeId>, "<UniqueId>", {<Payload>}]
//ERROR [<MessageTypeId>, "<UniqueId>", "<errorCode>", "<errorDescription>", {<errorDetails>}]

const http = require('./servers/http');

http.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});
