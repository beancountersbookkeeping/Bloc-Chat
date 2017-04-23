(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
         $stateProvider
         .state('home', {
             url: '/',
             controller: 'homeCtrl as home',
             templateUrl: '/templates/home.html'
         })
         .state('room', {
             url: '/rooms/:roomId',
             controller: 'roomCtrl as room',
             templateUrl: '/templates/room.html'
         })

     }
    
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                controller: 'usernameCtrl as username_modal',
                templateUrl: '/templates/username_modal.html'
                
            })
        }
    }
 
     angular
         .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap','ngCookies'])
         .config(config)
         .run(['$cookies', '$uibModal', BlocChatCookies]);
 })();