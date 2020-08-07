const bodyParser = require("body-parser");
const mongo = require('../lib/mongo');

module.exports = function (router) {
    router.post('/', bodyParser.json(), async function (req, res, next) {
       let options = {method, url, headers, body, routeName} = req.body;
       
       res.send(await mongo.save(options)); 
    });
};
