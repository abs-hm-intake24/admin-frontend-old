"use strict";

var getFormedUrl = require("../../core/utils/get-formed-url");

module.exports = function (app) {
    app.service("PairwiseAssociationsAdminService", ["$http", "$window", serviceFun]);
};

function serviceFun($http, $window) {

    return {
        copyOccurrenceData: function (sourceLocale, targetLocale) {
            return $http.post($window.api_base_url + "/admin/pairwise-associations/copy-occurrence-data", undefined, {
                params: {
                    src: sourceLocale,
                    dst: targetLocale
                }
            });
        }
    };
}
