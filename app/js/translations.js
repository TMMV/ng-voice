angular.module('KIT').config(["$translateProvider",
    function($translateProvider) {
        $translateProvider.translations('en', {
            Personal: 'Personal',
            Social: 'Social',
            Profile: 'Profile',
            HealthMonitoring: 'HealthMonitoring',
            HomeMonitoring: 'HomeMonitoring',
            Reminders: 'Reminders',
            Alerts: 'Alerts',
            Email: 'Email',
            Contacts: 'Contacts',
            Chat: 'Chat',
            Video: 'Video',
            Calendars: 'Calendars',
            Games: 'Games'
        });
        $translateProvider.translations('pt', {
            Personal: 'Pessoal',
            Social: 'Social',
        Profile: 'Perfil',
            HealthMonitoring: 'Monitorização de Saúde',
            HomeMonitoring: 'Monitorização de Ambiente',
            Reminders: 'Lembretes',
            Alerts: 'Alertas',
            Email: 'Email',
            Contacts: 'Contactos',
            Chat: 'Conversa',
            Video: 'Vídeo',
            Calendars: 'Calendários',
            Games: 'Jogos'
        });
        $translateProvider.preferredLanguage('en');
    }
]);