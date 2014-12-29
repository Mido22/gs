
theModule.controller('ComingSoonCtrl', function($scope, $http, $rootScope){
	/*
	$scope.city = "Chennai";
	
	
	$http.jsonp("http://ipinfo.io?callback=JSON_CALLBACK").success(function(data){        
		if(data.city && data.city.length > 3){
			$scope.city = data.city;
		}
    });
    */
  $scope.toggled = function(open) {
    console.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
	$scope.cities = $rootScope.cities;
	$scope.city = $scope.cities[0];		

	$scope.changeCity = function(c){
		$scope.city = c;
	};
});
