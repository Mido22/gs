
var homepage = angular.module('homepage', ['ui.bootstrap']);

homepage.controller('homePageCtrl', function($scope, $modal, $log){

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

	   if(navigator.geolocation){
	      var options = {timeout:3000};
	      navigator.geolocation.getCurrentPosition(function(position){

  				 		$scope.position = position;
  				 		$scope.changeUrl();
	      			},
	      			 function(err){
							  if(err.code == 1) {
							    $scope.errorMessage ="Error: Access is denied!";
							  }else if( err.code == 2) {
							    $scope.errorMessage ="Error: Position is unavailable!";
							  }
							  $scope.handleLocationFail();
	  					},  options);

	   }else{
	      $scope.errorMessage = "Sorry, browser does not support geolocation!";
	      $scope.handleLocationFail();
	   }
	};

	$scope.zipcode = '120605';

  $scope.handleLocationFail = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'partials/homepageModel.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        zipcode: function () {
          return $scope.zipcode;
        },
        errorMessage: function(){
          return $scope.errorMessage;

        }
      }
    });

    modalInstance.result.then(function (zipcode) {
    	console.log('hi ='+ zipcode);
      $scope.zipcode = zipcode;
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  };



});


homepage.controller('ModalInstanceCtrl', function ($scope, $modalInstance, zipcode) {


  $scope.ok = function () {
    $modalInstance.close($scope.zipcode);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
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

