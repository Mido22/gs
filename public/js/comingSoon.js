
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

