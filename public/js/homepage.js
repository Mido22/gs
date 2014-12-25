
var homepage = angular.module('homepage', ['ui.bootstrap']);

homepage.controller('homePageCtrl', function($scope){

  $scope.toggled = function(open) {
    console.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

	$scope.cities = ['Chennai', 'Mumbai', 'Bangalore'];
	$scope.city = $scope.cities[0];	
});


$(document).ready(function(){

		$(".fade").click(function(){
			$(".fade .close").click();
		});
	$('.tmpBtn').hide();
	setTimeout(function(){
		$( "a" ).click(function() {
			$('#myModal').modal('show');		
		});
	},1000);
});

