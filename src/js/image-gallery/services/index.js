'use strict';

module.exports = function(app) {
    require('./as-served-set-service')(app);
    require('./image-service')(app);
    require("./guided-images.service")(app);
};