/**
 * Created by Tim Osadchiy on 27/09/2016.
 */

"use strict";

module.exports = function (app) {
    app.service("UserRequestService", ["$http", "$q", serviceFun])
};

function serviceFun($http, $q) {
    return {
        login: function (username, password) {
            var defer = $q.defer(),
                url = window.api_base_url + "signin",
                data = {
                    email: username,
                    password: password
                };

            $http.post(url, data).then(function successCallback(data) {
                defer.resolve(data);
            });

            return defer.promise;
        },
        refresh: function () {
            var url = window.api_base_url + "refresh";
            return $http.post(url);
        }
    }
}
