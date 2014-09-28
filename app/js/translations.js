angular.module('VoiceApp').config(["$translateProvider",
    function($translateProvider) {
        $translateProvider.translations('en', {
            Profile: 'Profile',
            Contact: 'Contact',
			Language: 'Language',
			Back: 'Back',
			Say: 'Say',
			GetBack: 'to get back',
			ProfilePage : 'This is the profile page',
			MainPage: 'This is the main page. Say profile to go to the profile page.'
        });
        $translateProvider.translations('pt', {
			Profile: 'Perfil',
            Contact: 'Contacto',			
			Language: 'Linguagem',
			Back: 'Para Trás',
			Say: 'Diga',
			GetBack: 'para voltar para trás',
			ProfilePage : 'Esta é a página de perfil',
			MainPage: 'Esta é a página principal. Diga "perfil" para ir para a página de perfil.'
        });
        $translateProvider.preferredLanguage('en');
    }
]);