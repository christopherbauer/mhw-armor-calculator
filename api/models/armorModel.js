'use strict'

const Sequelize = require('sequelize');
const database = require("../database");

const armorModel = database.sequelize.define("armor", {
    armorId: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    gameId: {
        type: Sequelize.INTEGER
    },
    armorTypeId: {
        type: Sequelize.INTEGER
    },
    rarityId: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    defense: {
        type: Sequelize.INTEGER
    },
    vsFire: {
        type: Sequelize.INTEGER
    },
    vsWater: {
        type: Sequelize.INTEGER
    },
    vsThunder: {
        type: Sequelize.INTEGER
    },
    vsIce: {
        type: Sequelize.INTEGER
    },
    vsDragon: {
        type: Sequelize.INTEGER
    }
}, { timestamps: false, freezeTableName: true });

exports.ArmorModel = armorModel;