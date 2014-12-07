console.log('hi');

var comingSoon = angular.module('comingSoon', []);

comingSoon.controller('HelloWorldCtrl', function($scope){
  $scope.helloMessage = "Hello world";

});



