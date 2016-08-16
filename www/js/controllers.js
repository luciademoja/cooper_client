angular.module('starter.controllers', [])

.controller('AppCtrl', function($rootScope,
                               $scope,
                               $timeout,
                               $auth,
                               $ionicLoading) {

  $scope.loginData = {};

  $scope.closeLogin = function() {
    $scope.hide();
  };

  $scope.login = function() {
    $scope.show();
  };

  $rootScope.$on('auth:login-success', function(ev, user) {
    $scope.currentUser = user;
  });

  $scope.doLogin = function () {
    $ionicLoading.show({
      template: 'Logging in...'
    });
    $auth.submitLogin($scope.loginData)
      .then(function (resp) {
        $ionicLoading.hide();
        $scope.closeLogin();
      })
      .catch(function (error) {
        $ionicLoading.hide();
        $scope.errorMessage = error;
      });
  };
})

.controller('RegistrationCtrl', function($scope, $auth, $ionicLoading) {

  $scope.registrationData = {};

    $scope.clickRegistrationButton = function() {
      $ionicLoading.show({
       template: 'Signing up...'
      });
      $auth.submitRegistration($scope.registrationData)
        .then(function(resp) {
          $ionicLoading.hide();
          console.log('Success');
        })
        .catch(function(resp) {
          $ionicLoading.hide();
        });
      };
    })

  // $scope.register = function() {
  //   $scope.show();
  // };
  //
  // $scope.registrationData = {};
  //
  // $scope.clickRegistrationButton = function() {
  //   $ionicLoading.show({
  //    template: 'Please wait...'
  //   });
  //   $auth.submitRegistration($scope.registrationData)
  //     .then(function(resp) {
  //       $ionicLoading.hide();
  //       $scope.register();
  //       console.log('Account registered successfully!');
  //     })
  //     .catch(function(error) {
  //       $ionicLoading.hide();
  //       $scope.errorMessage = error;
  //     });
  // };


.controller('PerformanceCtrl', function($scope, performanceData){
  $scope.saveData = function(person){
  data = {performance_data: {data: {message: person.cooperMessage}}}
  performanceData.save(data, function(response){
    console.log(response);
    }, function(error){
    console.log(error);
    })
  };
  $scope.retrieveData = function(){

  };
})

.controller('TestController', function($scope) {
  $scope.gender = ['Male', 'Female']
  $scope.ageValues = {
    min: 20,
    max: 60,
    value: 20
  };
  $scope.distanceValues = {
    min: 1000,
    max: 3500,
    value: 1000
  };
  $scope.data = {};
  $scope.calculateCooper = function() {
    var person = new Person({
      gender: $scope.data.gender,
      age: $scope.data.age,
      distance: $scope.data.distance
    });
    person.assessment($scope.data);
    $scope.person = person;
    console.log($scope.person);
  };
});
