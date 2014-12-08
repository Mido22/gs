
var comingSoon = angular.module('comingSoon', []);

comingSoon.controller('ComingSoonCtrl', function($scope, $http){
	$scope.city = "Chennai";
	$http.jsonp("http://ipinfo.io?callback=JSON_CALLBACK").success(function(data){
        console.log(JSON.stringify(data));
		$scope.city = data.city;
    });
	
});



