const httpFetchter = require('../lib/httpFetchter');

module.exports = async function (apis) {
        arrayPromiseDasChamadasDaAPI=[];
        apis.forEach(element => {
            var promiseDasChamadasRealizada = httpFetchter(element.method, element.url, element.headers, element.body, element.routeName, element.id);
            arrayPromiseDasChamadasDaAPI.push(promiseDasChamadasRealizada);
        });
        return Promise.all(arrayPromiseDasChamadasDaAPI)
        .then((values) => {
            return values;
        }).catch((err) => {
            console.log(err);
            return err;
        });
};