'use strict';

var _ = require('underscore');

module.exports = function(app) {
    app.service('LocalesService', ['$window', '$rootScope', '$http', 'PackerService', '$q', serviceFun]);
};

function serviceFun($window, $rootScope, $http, PackerService, $q) {

	var locales = [];

	var localesDeferred = $q.defer();

	var currentLocale = $window.intake24_locale;

	$rootScope.$on("intake24.admin.LoggedIn", function(event) {
		reloadLocales();
	});

	reloadLocales();

	function unpackLocale(packed) {
		return {
			id : packed.id,
			englishName : packed.englishName,
			localName: packed.localName,
			respondentLanguage: packed.respondentLanguage,
			adminLanguage: packed.adminLanguage,
			flagCode: packed.flagCode,
			prototypeLocale: PackerService.unpackOption(packed.prototypeLocale),
			textDirection: packed.textDirection
		}
	}

	function reloadLocales() {
		$http.get(api_base_url + 'admin/locales').then(function(data) {
			locales = _.map(data, unpackLocale);
			localesDeferred.resolve(locales);
		}, function(response) {
			console.error("Failed to load locale information");
		});
	}

	return {

		listFuture: function() {
			return localesDeferred.promise;
		},

		list : function() {
			return locales;
		},

		current: function() {
			return currentLocale;
		},

		currentInfo: function() {
			return _.find(locales, function(l) { return l.id == currentLocale;})
		}
	};

}
