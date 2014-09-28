'use strict';

/* Directives */


angular.module('VoiceApp.directives').
directive('voice', ['$document', '$location', '$translate',
    function($document, $location, $translate) {

        annyang.start();

        return function(scope, element, attr) {
            if ($translate.use() == 'en')
                annyang.setLanguage('en');
            if ($translate.use() == 'pt')
                annyang.setLanguage('pt-PT');

            var commands = {};
            var command = element.text();
            $translate(command).then(function(translated) {
                if (translated != command)
                    command = translated;
                commands[command] = function() {
                    scope.$apply(function() {
                        $location.path(element.attr('href').substring(1));
                    });
                };

                // Add our commands to annyang
                annyang.addCommands(commands);
            });
        };
    }
]);