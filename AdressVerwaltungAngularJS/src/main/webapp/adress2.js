angular.module("adresse2", [])
    .controller("Address2Controller", function($scope, $http) {
    	$http.get('/AdressVerwaltung/rest/address/element').
    	  success(function(data)
    		{ 
    		  $scope.adress = {};
    		  $scope.adress.anrede = data.anrede;
    		  $scope.adress.vorname = data.vorname;
    		  $scope.adress.nachname = data.nachname;
    		  $scope.adress.email = data.email;
    		  $scope.name = function() {
    			  return $scope.adress.vorname + " " + $scope.adress.nachname;
    		  }
    			  })
    			  
         $http.get('/AdressVerwaltung/rest/address/list').
    	  success(function(data)
    		{ 
    		  $scope.adress2 = {};
    		  $scope.adress2 = JSON.stringify(data)    		  
    		  $scope.adress3 = data    		  
    			  })
    });