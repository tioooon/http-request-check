const axios = require('axios');

module.exports = function (method, url, headers, body, routeName, id) {
    
    var options = {
        method: method,
        url: url,
        headers: headers,
        body: body
    };
    return axios(options)
    .then(function (response) {
        return {id: id, name: routeName, status: response.status};
    })
    .catch(function (error) {
        return {id: id, name: routeName, status: error.response.status}; 
    });
};