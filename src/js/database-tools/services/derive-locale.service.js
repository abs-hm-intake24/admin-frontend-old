"use strict";

var getFormedUrl = require("../../core/utils/get-formed-url");

module.exports = function (app) {
    app.service("DeriveLocaleService", ["$http", "$window", serviceFun]);
};

function serviceFun($http, $window) {

    return {
        deriveLocale: function (sourceLocale, targetLocale, format, file) {
            var fd = new FormData();
            fd.append("file", file);
            fd.append("sourceLocale", sourceLocale);
            fd.append("targetLocale", targetLocale);
            fd.append("format", format);

            return $http.post($window.api_base_url + "v2/foods/admin/derive-locale", fd, {
                transformRequest: angular.identity,
                headers: {"Content-Type": undefined}
            });
        },

        cloneLocalFoods: function (sourceLocale, targetLocale) {
            var fd = new FormData();

            fd.append("sourceLocale", sourceLocale);
            fd.append("targetLocale", targetLocale);

            return $http.post($window.api_base_url + "v2/foods/admin/clone-local", fd, {
                transformRequest: angular.identity,
                headers: {"Content-Type": undefined}
            });
        }
    };
}
