const bodyParser = require("body-parser");
const mongo = require('../lib/mongo');

module.exports = function (router) {
    router.post('/:id', bodyParser.json(), async function (req, res, next) {
        let options = {method, url, headers, body, routeName} = req.body;
        res.send(await mongo.update(+req.params.id, options));
    });
};