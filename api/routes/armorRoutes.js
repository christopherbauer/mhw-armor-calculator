'use strict';
module.exports = function(app) {
    var armorController = require("../controllers/armorController");

    //routes
    app.route("/armors")
        .get(armorController.list)
        //.post() //create
        ;

    app.route("/armors/:armorId")
        .get(armorController.get)
        //.put() //update
        //.delete() //delete
        ;
}