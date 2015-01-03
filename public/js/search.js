
theModule.controller('searchCtrl', function($scope, $modal, $log, $rootScope){

  var sr = {};
  sr.totalCount = 521 ;
  sr.searchDistance = 5;
  sr.currentPage = 3;
  sr.searchTerm = 'mido';
  sr.itemsPerPage = 5;
  sr.numPages = Math.ceil(sr.totalCount / sr.itemsPerPage);
  sr.sortBy = 'Relevence';
  sr.results = [];
  for(var i=0;i<10;i++){
    var obj = {};
    obj.noOfItems = 5 + Math.round(Math.random()*31);
    obj.shopName = 'Some shopName';
    obj.address = 'Adyar> No. 11/201, Indirra nagar Main Road, Indira Nagar.';
    obj.phoneNos = ['044-24411909','044-24411910'].join(', ');
    obj.distanceFromYou = 2.4;
    sr.results.push(obj);
  }
  sr.changeSort = function(sortBy){
    sr.sortBy = sortBy;
  };
  $scope.sr = sr;
  $scope.toggled = function(open) {
    console.log('Dropdown is now: ', open);
  };

  $scope.pageChanged = function(){
    console.log('page', sr.currentPage);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

	$scope.cities = $rootScope.cities;
	$scope.searchDistances = $rootScope.searchDistances;
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
      scope: $scope,
      resolve: {
      }
    });

    modalInstance.result.then(function (zipcode) {
      $scope.zipcode = zipcode;
      $scope.changeUrl();
    }, function () { // when cancel is clicked.
    });
  };
  
});


theModule.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {


  $scope.ok = function () {
    $modalInstance.close($scope.zipcode);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});


