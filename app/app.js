'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.admissions',
  'myApp.career',
  'ui.bootstrap'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({
      redirectTo: '/home'
    });
  }])
  .controller('mainCtrl', ['$scope', function($scope) {

  }]);
