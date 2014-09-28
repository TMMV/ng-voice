'use strict';

// Declare app level module which depends on filters, and services
angular.module('VoiceApp', [
    'ngRoute', 'ngCookies',
    'VoiceApp.services',
    'VoiceApp.directives',
    'VoiceApp.controllers',
    'pascalprecht.translate'
]);

angular.module('VoiceApp.filters', []);
angular.module('VoiceApp.services', []);
angular.module('VoiceApp.directives', []);
angular.module('VoiceApp.controllers', []);

angular.module('VoiceApp').config(['$routeProvider',
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