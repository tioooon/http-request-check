const mongo = require('../lib/mongo');
var serialize = require('node-serialize');
const utils = require('../model/utils');

module.exports = function (router) {
    router.get('/', async function (req, res, next) { 

        var listDeChamadas = await mongo.findAll();
        var resultoDasChamadas = await utils(listDeChamadas); 

        res.send(resultoDasChamadas); 
    });
};