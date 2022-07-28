"use strict";

var _ = require("underscore");

module.exports = function (app) {
    app.controller("CopyPADataController", ["$scope", "PairwiseAssociationsAdminService",
        "LocalesService", "MessageService", "appRoutes", controllerFun]);
};

function controllerFun($scope, PairwiseAssociationsAdminService, LocalesService, MessageService, AppRoutes) {

    $scope.requestInProgress = false;
    $scope.sourceLocale = undefined;
    $scope.targetLocale = undefined;

    LocalesService.list().then(function (locales) {
        $scope.locales = locales;
    });

    $scope.copyOccurrenceData = function () {
        $scope.requestInProgress = true;

        PairwiseAssociationsAdminService.copyOccurrenceData($scope.sourceLocale, $scope.targetLocale).then(
            function (response) {
                $scope.requestInProgress = false;
                MessageService.showSuccess("Pairwise associations data copied successfully");
            }, function (response) {
                $scope.requestInProgress = false;
            }
        );
    };
}
