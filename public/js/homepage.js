
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
	$scope.searchDistances = [5, 10, 15, 20 , 25, 50];
	$scope.searchDistance = $scope.searchDistances[0];
	$scope.city = $scope.cities[0];	
	$scope.changeCity = function(c){
		$scope.city = c;
	};
	$scope.changeDist = function(d){
		$scope.searchDistance  = d;
	};
	$scope.search = function(){
		getLocation();
	};
});


$(document).ready(function(){
	setTimeout(function(){
		$("#myModal").click(function(evt){
			if(evt.target.className.indexOf('close')>-1)	return;
			$(".fade .close").click();
		});

		$( ".footer a" ).click(function() {
			$('#myModal').modal('show');		
		});
	},1000);
});


function showLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  alert("Latitude : " + latitude + " Longitude: " + longitude);
}

function errorHandler(err) {
  if(err.code == 1) {
    alert("Error: Access is denied!");
  }else if( err.code == 2) {
    alert("Error: Position is unavailable!");
  }
}
function getLocation(){

   if(navigator.geolocation){
      // timeout at 60000 milliseconds (60 seconds)
      var options = {timeout:60000};
      navigator.geolocation.getCurrentPosition(showLocation, 
                                               errorHandler,
                                               options);
   }else{
      alert("Sorry, browser does not support geolocation!");
   }
}