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
         
         .state('modal', {
             url: '/',
             controller: 'modalCtrl as modal'            
         })

     }
 
     angular
         .module('blocChat', ['ui.router','firebase','$uibModal'])
         .config(config);
 })();