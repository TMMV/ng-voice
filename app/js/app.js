'use strict';

// Declare app level module which depends on filters, and services
angular.module('KIT', [
    'ngRoute', 'ngCookies',
    'KIT.filters',
    'KIT.services',
    'KIT.directives',
    'KIT.controllers',
    'pascalprecht.translate'
]);

angular.module('KIT.filters', []);
angular.module('KIT.services', []);
angular.module('KIT.directives', []);
angular.module('KIT.controllers', []);

angular.module('KIT').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        });
        $routeProvider.when('/profile', {
            templateUrl: 'partials/profile.html',
            controller: 'ProfileCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/main'
        });
    }
]);