var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Patinha Fácil - Web Service');
});

module.exports = app => { app.use('/', router); }