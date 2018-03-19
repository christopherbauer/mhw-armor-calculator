'use strict';

var models = require("../models/armorModel");


exports.list = function(request, result) {
    models.ArmorModel.findAll().then(armors => {
        result.json(armors);
    });
}

exports.get = function(request, result) {
    models.ArmorModel.findAll({
        where: {
            armorId: request.params.armorId
        }
    }).then(armor => result.json(armor));
}