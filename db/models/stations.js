const Sequelize = require('sequelize');
const _ = require('lodash');

const sequelize = require('../db');


const Model = Sequelize.Model;

class Station extends Model {

    static checkCPRegistered (cpName) {
        return Station.findOne({
            attributes: ['name'],
            where: {
                name: cpName,
            },
        }).then((station) => {
                return _.get(station, 'name', null)
            });
    };

    static registerCP (cpName) {
        Station.findOrCreate({
            where: {
                name: cpName,
            },
            defaults: {
                name: cpName,
            },
        }).then((data) => {
                const obj = data[0];
                const wasCreated = data[1];
                console.log(obj, `Was created: ${wasCreated}`)
            });
    }
}

Station.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

}, {
    sequelize,
    modelName: 'station',
});

module.exports = Station;