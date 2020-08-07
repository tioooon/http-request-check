module.exports = function (router) {
    router.get('/', function (req, res, next) {
       res.send({status: 'UP'});
    });
};
