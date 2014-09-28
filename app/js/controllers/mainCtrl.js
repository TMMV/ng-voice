'use strict';

/* Controllers */

angular.module('VoiceApp.controllers')
    .controller('MainCtrl', ["$scope", "Language",
        function($scope, Language) {
			$scope.languagePicked = Language.checkLanguage();
			$scope.saveLanguage = function(key) {
                Language.saveLanguage(key);
                $scope.languagePicked = key;
            };
        }
    ])