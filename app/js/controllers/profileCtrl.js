'use strict';

/* Controllers */

angular.module('KIT.controllers')
    .controller('ProfileCtrl', ["$scope", "Language",
        function($scope, Language) {
            $scope.languagePicked = Language.checkLanguage();

            $scope.saveLanguage = function(key) {
                Language.saveLanguage(key);
                $scope.languagePicked = key;
            };
            $scope.sendLanguage = function(key) {
                Language.sendLanguage(key).then(
                    function(data) {
                        $scope.sendResponse = data;
                    }, function(reason) {
                        $scope.sendResponse = reason;
                    }
                );
            };
            $scope.getLanguage = function() {
                Language.getLanguage().then(
                    function(data) {
                        $scope.getResponse = data;
                    }, function(reason) {
                        $scope.getResponse = reason;
                    }
                );
            };
        }
    ])