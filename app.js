var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);

var path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

var db = require('./models');

const consign = require('consign');

consign()
    .include('routes')
    .into(app);


db.sequelize.sync(/*{force: true}*/).then(function () {
    server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
        var addr = server.address();
        console.log("Connected to ", addr.address + ":" + addr.port);
    });
});