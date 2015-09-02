addressApp.controller("AddressListCtrl", function($scope, $http) {
	    
         $http.get('/AdressVerwaltungAngularJS/rest/address/list').
    	  success(function(data)
    		{ 
    		  $scope.address2 = {};
    		  $scope.address2 = JSON.stringify(data)    		  
    		  $scope.address = data    		  
    			  })
    });