'use strict';

require("angular");
require("angular-sanitize");
require("angular-animate");
require("angular-touch");
require("angular-ui-bootstrap");
require("angular-cookies");
require("ui-select");
require("angular-route");

var moduleRequirements = ['ngCookies', 'ui.bootstrap', 'ngSanitize', 'ngAnimate', 'ngTouch', 'ui.select', 'ngRoute'],
    app = angular.module('intake24.admin', moduleRequirements);

require('./controllers')(app);
require('./directives')(app);
require('./services')(app);
require('./filters')(app);
require('./config')(app);
require('./set-routes')(app);

window.api_base_url = process.env.API_BASE_URL;

// Fixme: fix and remove all the scripts from other
require('./other')();