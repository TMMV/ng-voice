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
                },
                sendLanguage: function(key) {
                    $cookies.language = key;

                    var deferred = $q.defer();
                    $http.put('../../api/users/1/', {
                        userid: 1,
                        language: key
                    }).success(function(data) {
                        deferred.resolve(data);
                    }).error(function(data) {
                        deferred.reject(data);
                    });
                    return deferred.promise;
                },
                getLanguage: function() {
                    var deferred = $q.defer();
                    $http.get('../../api/users/1/').success(function(data) {
                        deferred.resolve(data);
                    }).error(function(data) {
                        deferred.reject(data);
                    });
                    return deferred.promise;
                }
            }
        }
    ]);