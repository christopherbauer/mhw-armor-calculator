'use strict';

var models = require("../models/armorTypeModel");


exports.list = function(request, result) {
    models.ArmorTypeModel.findAll().then(armorTypes => {
        result.json(armorTypes);
    });
}