'use strict';

module.exports = function(app) {
    require('./admin-controller')(app);
    require('./auth-controller')(app);
    require('./explorer-controller')(app);
    require('./messages-controller')(app);
    require('./navigation-controller')(app);
    require('./image-gallery-navigation-controller')(app);
    require('./image-gallery-main-controller')(app);
    require('./image-gallery-as-served-controller')(app);
    require('./search-controller')(app);

    require('./drawers-controllers')(app);
    require('./properties-controllers')(app);
};