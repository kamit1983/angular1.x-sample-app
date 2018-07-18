'use strict';

angular.module('myApp.admissions', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/admissions', {
    templateUrl: 'admissions/admissions.html',
    controller: 'admissionsCtrl'
  });
}])

.controller('admissionsCtrl', ['$scope', '$window', '$rootScope', function($scope, $window, $rootScope) {
  $('#maincarousel').hide();

}]);
