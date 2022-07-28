/**
 * Created by Tim Osadchiy on 19/03/2017.
 */

"use strict";

module.exports = function(app) {
    app.directive("surveyEditForm", [
        "LocalesService",
        "SurveyService",
        "UserStateService",
        "uiDatetimePickerConfig",
        directiveFun
    ]);
};

function directiveFun(LocalesService, SurveyService, UserStateService, uiDatetimePickerConfig) {
    function controller(scope, element, attribute) {
        scope.form = {};

        scope.schemes = [
            {
                id: "default",
                name: "Default"
            },
            {
                id: "ndns_default",
                name: "NDNS Default"
            },
            {
                id: "ndns419",
                name: "NDNS dress rehearsal (April 2019)"
            },
            {
                id: "ndns1019",
                name: "NDNS (October 2019)"
            },
            {
                id: "ndns1019_behaviour",
                name: "NDNS (October 2019) Behaviour"
            },
            {
                id: "ndns_follow_up",
                name: "NDNS FollowUp"
            },
            {
                id: "sab",
                name: "South Asia BioBank"
            },
            {
                id: "bham1119",
                name: "Birmingham (Nov 2019)"
            }
        ];

        scope.searchSortingAlgorithmOptions = [
            {
                id: "paRules",
                name: "Pairwise associations (machine learning)"
            },
            {
                id: "popularity",
                name: "Popularity (reporting frequency) in study locale"
            },
            {
                id: "globalPop",
                name: "Global popularity (reporting frequency)"
            },
            {
                id: "fixed",
                name: "Predetermined order"
            }
        ];

        scope.uiDatetimePickerConfig = uiDatetimePickerConfig;
        scope.surveyStateOptions = [
            { value: "0", text: "Has not started" },
            { value: "2", text: "Active" },
            { value: "1", text: "Suspended" }
        ];

        scope.loading = false;

        scope.formValidation = {
            name: true,
            supportEmail: true,
            surveyPeriod: true
        };

        scope.datePickerState = {
            startIsOpen: false,
            endIsOpen: false
        };

        scope.locales = [];

        scope.showJWT = false;

        scope.toggleShowJWT = function() {
            scope.showJWT = !scope.showJWT;
        };

        scope.openStartDatePicker = function() {
            scope.datePickerState.startIsOpen = true;
        };

        scope.openEndDatePicker = function() {
            scope.datePickerState.endIsOpen = true;
        };

        scope.cancel = function() {
            updateScope(scope, scope.survey);
        };

        scope.save = function() {
            if (!validateForm(scope)) {
                return;
            }
            var def;
            scope.loading = true;
            if (!scope.survey) {
                def = SurveyService.create(getRequest(scope));
            } else {
                def = SurveyService.patch(scope.survey.id, getRequest(scope)).then(function(data) {
                    updateScope(scope, data);
                    updateSurvey(scope, data);
                    return data;
                });
            }
            def.then(function(data) {
                if (scope.onSaved) {
                    scope.onSaved(data);
                }
            }).finally(function() {
                scope.loading = false;
            });
        };

        scope.$watch("survey", function(newVal) {
            updateScope(scope, newVal);
        });

        scope.$watch(
            function() {
                return UserStateService.getUserInfo();
            },
            function(newValue) {
                scope.currentUser = newValue;
            }
        );

        LocalesService.list().then(function(locales) {
            scope.locales = locales;
        });
    }

    return {
        restrict: "E",
        scope: {
            survey: "=?",
            onSaved: "=?"
        },
        link: controller,
        template: require("./survey-edit-form.directive.html")
    };
}

function getRequest(scope) {
    return {
        id: scope.form.name,
        state: scope.form.state,
        startDate: scope.form.startDate.toISOString(),
        endDate: scope.form.endDate.toISOString(),
        schemeId: scope.form.schemeId,
        localeId: scope.form.selectedLocale,
        allowGeneratedUsers: scope.form.allowGeneratedUsers,
        generateUserKey: scope.form.generateUserKey,
        externalFollowUpURL: scope.form.externalFollowUpURL,
        supportEmail: scope.form.supportEmail,
        description: scope.survey ? scope.survey.description : null,
        finalPageHtml: scope.survey ? scope.survey.finalPageHtml : null,
        submissionNotificationUrl: scope.form.submissionNotificationUrl,
        feedbackEnabled: scope.form.feedbackEnabled,
        numberOfSubmissionsForFeedback: scope.form.numberOfSubmissionsForFeedback,
        storeUserSessionOnServer: scope.form.storeUserSessionOnServer,
        maximumDailySubmissions: scope.form.maximumDailySubmissions,
        maximumTotalSubmissions: scope.form.maximumTotalSubmissions,
        minimumSubmissionInterval: scope.form.minimumSubmissionInterval,
        authUrlDomainOverride: scope.form.authUrlDomainOverride,
        errorReporting: scope.form.errorReporting,
        searchSortingAlgorithm: scope.form.searchSortingAlgorithm,
        searchMatchScoreWeight: scope.form.searchMatchScoreWeight
    };
}

function validateForm(scope) {
    scope.formValidation.name = scope.form.name.trim() != "";

    scope.formValidation.supportEmail = scope.form.supportEmail.trim() != "";

    scope.formValidation.surveyPeriod =
        scope.form.startDate != null &&
        scope.form.endDate != null &&
        scope.form.endDate >= scope.form.startDate;

    return (
        scope.formValidation.name &&
        scope.formValidation.supportEmail &&
        scope.formValidation.surveyPeriod
    );
}

function updateScope(scope, data) {
    if (!data) {
        scope.form.name = "";
        scope.form.state = "0";
        scope.form.selectedLocale = "en_GB";
        scope.form.schemeId = "default";
        scope.form.allowGeneratedUsers = false;
        scope.form.externalFollowUpURL = "";
        scope.form.supportEmail = "";
        scope.form.startDate = null;
        scope.form.endDate = null;
        scope.form.feedbackEnabled = false;
        scope.form.numberOfSubmissionsForFeedback = "1";
        scope.form.storeUserSessionOnServer = false;
        scope.form.maximumDailySubmissions = 3;
        scope.form.minimumSubmissionInterval = 600;
        scope.form.authUrlDomainOverride = null;
        scope.form.errorReporting = {
            reportSurveyState: true,
            reportStackTrace: true
        };
        scope.form.searchSortingAlgorithm = "paRules";
        scope.form.searchMatchScoreWeight = 0
    } else {
        scope.form.name = data.id;
        scope.form.state = String(data.state);
        scope.form.selectedLocale = data.localeId;
        scope.form.schemeId = data.schemeId;
        scope.form.allowGeneratedUsers = data.allowGeneratedUsers;
        scope.form.generateUserKey = data.generateUserKey;
        scope.form.externalFollowUpURL = data.externalFollowUpURL;
        scope.form.supportEmail = data.supportEmail;
        scope.form.startDate = new Date(data.startDate);
        scope.form.endDate = new Date(data.endDate);
        scope.form.submissionNotificationUrl = data.submissionNotificationUrl;
        scope.form.feedbackEnabled = data.feedbackEnabled;
        scope.form.numberOfSubmissionsForFeedback = data.numberOfSubmissionsForFeedback;
        scope.form.storeUserSessionOnServer = data.storeUserSessionOnServer;
        scope.form.maximumDailySubmissions = data.maximumDailySubmissions;
        scope.form.maximumTotalSubmissions = data.maximumTotalSubmissions;
        scope.form.minimumSubmissionInterval = data.minimumSubmissionInterval;
        scope.form.authUrlDomainOverride = data.authUrlDomainOverride;
        scope.form.errorReporting = data.errorReporting;
        scope.form.searchSortingAlgorithm = data.searchSortingAlgorithm;
        scope.form.searchMatchScoreWeight = data.searchMatchScoreWeight;
    }
}

function updateSurvey(scope, data) {
    scope.survey.id = data.id;
    scope.survey.state = data.state;
    scope.survey.localeId = data.localeId;
    scope.survey.schemeId = data.schemeId;
    scope.survey.allowGeneratedUsers = data.allowGeneratedUsers;
    scope.survey.generateUserKey = data.generateUserKey;
    scope.survey.externalFollowUpURL = data.externalFollowUpURL;
    scope.survey.supportEmail = data.supportEmail;
    scope.survey.startDate = data.startDate;
    scope.survey.endDate = data.endDate;
    scope.survey.submissionNotificationUrl = data.submissionNotificationUrl;
    scope.survey.feedbackEnabled = data.feedbackEnabled;
    scope.survey.numberOfSubmissionsForFeedback = data.numberOfSubmissionsForFeedback;
    scope.survey.storeUserSessionOnServer = data.storeUserSessionOnServer;
    scope.survey.maximumDailySubmissions = data.maximumDailySubmissions;
    scope.survey.maximumTotalSubmissions = data.maximumTotalSubmissions;
    scope.survey.minimumSubmissionInterval = data.minimumSubmissionInterval;
    scope.form.authUrlDomainOverride = data.authUrlDomainOverride;
    scope.form.errorReporting = data.errorReporting;
    scope.form.searchSortingAlgorithm = data.searchSortingAlgorithm;
    scope.form.searchMatchScoreWeight = data.searchMatchScoreWeight;
}
