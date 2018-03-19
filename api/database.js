'use strict'

const Sequelize = require('sequelize');
const sequelize = new Sequelize('Monster-Hunter','MonsterHunterArmorCalculatorReader','mhw@rm0rc@lc', {
    host: 'DEVIMAGE-LAPTOP',
    dialect: 'mssql',
    dialectOptions: {
        port: 1433
    },
    operatorAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully');
    })
    .catch(err => 
        {
            console.error("Unable to connect to the database: ", err);
    });

exports.sequelize = sequelize;