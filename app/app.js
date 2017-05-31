var myCVApp = angular.module('myCVApp', ['ngMaterial', 'ui.router']); //ngRoute

myCVApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: './module/main/main.html',
      controller: 'mainController',
      controllerAs: 'vm'
    });
    // .state('experience', {
    //   url: '/experience',
    //   templateUrl: './module/experience/experience.html',
    //   controller: 'experienceController',
    //   parent: "main",
    //   controllerAs: 'vm'
    // });
});