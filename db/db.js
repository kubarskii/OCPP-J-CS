const Sequelize = require('sequelize');
const options = require('../config/dbConfig');

const sequelize = new Sequelize(options.dbName, options.userName, options.password, options.dbDir);

module.exports = sequelize;