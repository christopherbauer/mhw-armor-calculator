'use strict'

const Sequelize = require('sequelize');
const database = require("../database");

const armorTypeModel = database.sequelize.define("armorType", {
    armorTypeId: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    }
}, { timestamps: false, freezeTableName: true });

exports.ArmorTypeModel = armorTypeModel;