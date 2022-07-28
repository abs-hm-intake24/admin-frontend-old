/**
 * Created by Tim Osadchiy on 19/03/2017.
 */

"use strict";

module.exports = function(app) {
    app.directive("surveyDescription", [
        "$sce",
        "SurveyService",
        "UserStateService",
        "uiDatetimePickerConfig",
        directiveFun
    ]);
};

function directiveFun($sce, SurveyService, UserStateService, uiDatetimePickerConfig) {
    function controller(scope, element, attribute) {
        scope.html = "";
        scope.preview = "";

        scope.targetField = attribute.field;

        scope.previewMode = false;

        scope.textAreaMode = getUserAccessTextareaMode(UserStateService);

        scope.textAreaModeIsAllowed = getUserAccessTextareaMode(UserStateService);

        scope.loading = false;

        scope.cancel = function() {
            updateScope(scope, scope.survey);
        };

        scope.showPreview = function() {
            scope.preview = $sce.trustAsHtml(scope.html);
            scope.previewMode = true;
        };

        scope.hidePreview = function() {
            scope.previewMode = false;
        };

        scope.setTextareaMode = function(val) {
            scope.textAreaMode = val;
        };

        scope.save = function() {
            scope.loading = true;
            SurveyService.patch(scope.survey.id, getRequest(scope))
                .then(function(data) {
                    updateScope(scope, data);
                    updateSurvey(scope, data);
                })
                .finally(function() {
                    scope.loading = false;
                });
        };

        scope.$watch("survey", function(newVal) {
            updateScope(scope, newVal);
        });
    }

    return {
        restrict: "E",
        scope: {
            survey: "=?"
        },
        link: controller,
        template: require("./survey-description.directive.html")
    };
}

function getRequest(scope) {
    var req = {
        id: scope.survey.id,
        state: scope.survey.state,
        startDate: scope.survey.startDate,
        endDate: scope.survey.endDate,
        schemeId: scope.survey.schemeId,
        localeId: scope.survey.localeId,
        allowGeneratedUsers: scope.survey.allowGeneratedUsers,
        generateUserKey: scope.survey.generateUserKey,
        externalFollowUpURL: scope.survey.externalFollowUpURL,
        supportEmail: scope.survey.supportEmail,
        description: scope.survey.description,
        finalPageHtml: scope.survey.finalPageHtml,
        submissionNotificationUrl: scope.survey.submissionNotificationUrl,
        feedbackEnabled: scope.survey.feedbackEnabled,
        numberOfSubmissionsForFeedback: scope.survey.numberOfSubmissionsForFeedback,
        storeUserSessionOnServer: scope.survey.storeUserSessionOnServer,
        maximumDailySubmissions: scope.survey.maximumDailySubmissions,
        maximumTotalSubmissions: scope.survey.maximumTotalSubmissions,
        minimumSubmissionInterval: scope.survey.minimumSubmissionInterval,
        authUrlDomainOverride: scope.survey.authUrlDomainOverride,
        errorReporting: scope.survey.errorReporting,
        searchSortingAlgorithm: scope.survey.searchSortingAlgorithm,
        searchMatchScoreWeight: scope.survey.searchMatchScoreWeight
    };

    req[scope.targetField] = scope.html;

    return req;
}

function updateScope(scope, data) {
    if (!data) {
        return;
    }

    scope.html = data[scope.targetField];
}

function updateSurvey(scope, survey) {
    survey[scope.targetField] = scope.html;
}

function getUserAccessTextareaMode(userService) {
    var ui = userService.getUserInfo();
    if (!ui) {
        return false;
    } else {
        return ui.isSuperUser() || ui.isGlobalSurveyAdmin();
    }
}
