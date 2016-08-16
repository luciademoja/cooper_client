angular.module('starter', ['ionic', 'starter.controllers', 'ng-token-auth', 'ngResource'])
    .constant('API_URL', 'https://ldm-cooper-api.herokuapp.com/api/v1')

  .config(function ($authProvider, API_URL) {
    $authProvider.configure({
      apiUrl: API_URL
    });
  })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.about', {
     url: '/about',
     views: {
       'menuContent': {
         templateUrl: 'templates/about/about.html'
       }
     }
  })

  .state('app.registration', {
     url: '/registration',
     views: {
       'menuContent': {
         templateUrl: 'templates/registration/registration.html',
         controller: 'RegistrationCtrl'
       }
     }
  })

  .state('app.login', {
     url: '/login',
     views: {
       'menuContent': {
         templateUrl: 'templates/login/login.html',
         controller: 'AppCtrl'
       }
     }
  })

  .state('app.test', {
   url: '/test',
   views: {
     'menuContent': {
       templateUrl: 'templates/test/test.html',
       controller: 'TestController'
     }
   }
 });

  $urlRouterProvider.otherwise('/app/about');
});
