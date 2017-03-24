var config = require('config');
var server = config.SERVER_URL;

var HomeService = {

    dummyFunction: function () {
        return "example";
    }
};

module.exports = HomeService;