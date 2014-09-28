'use strict';

/* Controllers */

angular.module('VoiceApp.controllers')
    .controller('ProfileCtrl', ["$scope", "Language",
        function($scope, Language) {
            Language.checkLanguage();

        }
    ])