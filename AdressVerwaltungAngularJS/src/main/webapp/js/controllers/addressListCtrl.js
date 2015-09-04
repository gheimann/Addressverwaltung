addressApp.controller("AddressListCtrl", function($scope, $http, AddressDataService) {
	    
         AddressDataService.getAddress().then(function(res) {
        	 $scope.address = res.data;   
		});
         
    });