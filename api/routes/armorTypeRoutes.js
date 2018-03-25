'use strict';
module.exports = function(app) {
    var armorTypeController = require("../controllers/armorTypeController");

    //routes
    app.route("/armorTypes")
        .get(armorTypeController.list)
        //.post() //create
        ;
}