const express = require('express');

const occp16Route = require('../routes/occp16');

const app = express();

app.use('/api/occp16/ws', occp16Route);

module.exports = app;