'use strict'

const config = require('./config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.databaseName,config.login,config.password, {
    host: config.host,
    dialect: 'mssql',
    dialectOptions: {
        port: 60641
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