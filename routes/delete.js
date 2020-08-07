const bodyParser = require("body-parser");
const mongo = require('../lib/mongo');

module.exports = function (router) {
    router.delete('/:id', bodyParser.json(), async function (req, res, next) {
         
       res.send(await mongo.delete(+req.params.id)); 
    });
};