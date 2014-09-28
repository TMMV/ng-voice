'use strict';

/* Controllers */

angular.module('KIT.controllers')
    .controller('MainCtrl', ["$scope", "Language",
        function($scope, Language) {
            Language.checkLanguage();
        }
    ])