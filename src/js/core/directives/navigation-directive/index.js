/**
 * Created by Tim Osadchiy on 31/12/2016.
 */

"use strict";

var _ = require('underscore'),
    getFormedUrl = require('../../utils/get-formed-url');

module.exports = function (app) {
    app.directive("navigationDirective", ["$location", "$routeParams", "LocalesService", "appRoutes",
        "UserStateService", directiveFun]);
};

function directiveFun($location, $routeParams, LocalesService, appRoutes, UserStateService) {

    function controller(scope, element, attributes) {

        scope.menuItems = {
            foodExplorer: {
                href: appRoutes.foodExplorer,
                collapsed: true,
                active: false
            },
            databaseTools: {
                foodFrequency: {
                    href: appRoutes.databaseTools.foodFrequency,
                    active: false
                },
                compositionTables: {
                    href: appRoutes.databaseTools.compositionTables,
                    active: false
                },
                deriveLocale: {
                    href: appRoutes.databaseTools.deriveLocale,
                    active: false
                },
                mergeLocales: {
                    href: appRoutes.databaseTools.mergeLocales,
                    active: false
                },
                cloneLocal: {
                    href: appRoutes.databaseTools.cloneLocal,
                    active: false
                },
                updateUKSA: {
                    href: appRoutes.databaseTools.updateUKSA,
                    active: false
                },
                recalculateNutrients: {
                    href: appRoutes.databaseTools.recalculateNutrients,
                    active: false
                },
                exportMapping: {
                    href: appRoutes.databaseTools.exportMapping,
                    active: false
                },
                collapsed: true,
                active: false
            },
            imageGalleries: {
                href: appRoutes.imageGalleryRoute,
                collapsed: true,
                active: false
            },
            imageGalleryMain: {
                href: appRoutes.imageGalleryMain,
                active: false,
                parent: "imageGalleries"
            },
            imageGalleryAsServed: {
                href: appRoutes.imageGalleryAsServed,
                active: false,
                parent: "imageGalleries"
            },
            imageGalleryGuided: {
                href: appRoutes.imageGalleryGuidedList,
                active: false,
                parent: "imageGalleries"
            },
            userManager: {
                href: appRoutes.userManagerRoute,
                collapsed: true,
                active: false
            },
            userManagerAdmins: {
                href: appRoutes.userManagerAdmins,
                active: false,
                parent: "userManager"
            },
            userManagerRespondents: {
                href: appRoutes.userManagerRespondents,
                active: false,
                parent: "userManager"
            },
            surveyManager: {
                href: appRoutes.surveyManager,
                active: false
            },
            surveyManagerNew: {
                href: appRoutes.surveyManagerNew,
                active: false
            },
            surveyFeedback: {
                href: appRoutes.surveyFeedback,
                active: false
            }

        };

        scope.toggleItem = function (itemName) {
            scope.menuItems[itemName].collapsed = !scope.menuItems[itemName].collapsed;
        };

        scope.getFoodExplorerHref = function (locale) {
            return getFormedUrl(appRoutes.foodExplorer, {locale: locale});
        };

        scope.$watchGroup(
            [
                function () {
                    return scope.locales;
                },
                function () {
                    return UserStateService.getUserInfo();
                }
            ],
            function (newValues, oldValues, scope) {

                if (!scope.locales) {
                    return;
                }

                scope.currentUser = UserStateService.getUserInfo();

                scope.accessibleFoodDatabases = _.filter(_.pluck(scope.locales, "id"), function (localeId) {
                    return scope.currentUser && scope.currentUser.canReadFoodDatabase(localeId);
                });
            }
        );

        scope.$on("$routeChangeSuccess", setActiveRoute);

        scope.canReadFoodDatabase = function (locale) {
            return _.contains(scope.accessibleFoodDatabases, locale.id);
        };

        LocalesService.list().then(function (locales) {
            scope.locales = locales;
        });

        function setActiveRoute() {
            scope.currentLocale = $routeParams.locale;
            for (var i in scope.menuItems) {
                scope.menuItems[i].active = false;
                if ($location.$$path == scope.menuItems[i].href) {
                    scope.menuItems[i].active = true;
                    if (scope.menuItems[i].parent) {
                        scope.menuItems[scope.menuItems[i].parent].active = true;
                        scope.menuItems[scope.menuItems[i].parent].collapsed = false;
                    }
                }
            }
        }

    }

    return {
        restrict: "E",
        link: controller,
        scope: {},
        template: require("./navigation-directive.pug")
    };
}
