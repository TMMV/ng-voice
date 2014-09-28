'use strict';

/* Services */
angular.module('VoiceApp.services')
    .factory('Language', ["$http", "$q", "$cookies", "$translate",
        function($http, $q, $cookies, $translate) {
            return {
                checkLanguage: function() {
                    $translate.use($cookies.language);
                    return $cookies.language;
                },
                saveLanguage: function(key) {
                    $cookies.language = key;
                    $translate.use(key);
                }
            }
        }
    ]);