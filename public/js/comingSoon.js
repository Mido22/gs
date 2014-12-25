
var comingSoon = angular.module('comingSoon', []);

comingSoon.controller('ComingSoonCtrl', function($scope, $http){
	$scope.city = "Chennai";
	
	
	$http.jsonp("http://ipinfo.io?callback=JSON_CALLBACK").success(function(data){        
		if(data.city && data.city.length > 3){
			$scope.city = data.city;
		}
    });	
});


$(document).ready(function(){

	setTimeout(function(){
		
		$("#myModal").click(function(evt){
			if(evt.target.className.indexOf('close')>-1)	return;
			$(".fade .close").click();
		});

		$( "a" ).click(function() {
			$('#myModal').modal('show');		
		});
	},1000);
});

