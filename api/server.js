var express = require("express"),
    app = express(),
    port = process.env.PORT || 3001,
    sequelize = require('sequelize'),
    ArmorModel = require("./models/armorModel"),
    ArmorTypeModel = require("./models/armorTypeModel"),
    bodyParser = require("body-parser")
    ;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(function(request, result, next) {
    result.header("Access-Control-Allow-Origin", "*");
    result.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var routes = require("./routes/armorRoutes");
var routes2 = require("./routes/armorTypeRoutes");
routes(app);
routes2(app);

app.listen(port);

console.log("armor REST API server started on: " + port);