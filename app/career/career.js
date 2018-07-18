'use strict';

angular.module('myApp.career', ['ngRoute'])

  // Declared route
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/career', {
      templateUrl: 'career/career.html',
      controller: 'CareerCtrl'
    });
  }])

  // Home controller
  .controller('CareerCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $('#maincarousel').hide();
  }]);
