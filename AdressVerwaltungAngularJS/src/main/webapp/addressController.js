app.controller("AddressController", function($scope, $http) {
	    $scope.edit = true;
	    $scope.error = false;
	    $scope.incomplete = false;
	    
	    $scope.bearbeitenAddress = function(id){
	    	if (id == 'new'){
	    		$scope.edit = false;
	    		$scope.incomplete = true;
	    	}
	    	else {
	    		$scope.edit = false;
	    		$http.get('/AdressVerwaltungAngularJS/rest/address/element/1').
	      	  success(function(data)
	      		{ 
	      		  $scope.address = {};
	      		  $scope.address.id = data.id;
	      		  $scope.address.anrede = data.anrede;
	      		  $scope.address.vorname = data.vorname;
	      		  $scope.address.nachname = data.nachname;
	      		  $scope.address.email = data.email;
	      		  $scope.name = function() {
	      			  return $scope.address.vorname + " " + $scope.address.nachname;
	      		  }
	      			  })
	    	}
	    		
	    }
	    
	    
    	$http.get('/AdressVerwaltungAngularJS/rest/address/element/1').
    	  success(function(data)
    		{ 
    		  $scope.address = {};
    		  $scope.address.id = data.id;
    		  $scope.address.anrede = data.anrede;
    		  $scope.address.vorname = data.vorname;
    		  $scope.address.nachname = data.nachname;
    		  $scope.address.email = data.email;
    		  $scope.name = function() {
    			  return $scope.address.vorname + " " + $scope.address.nachname;
    		  }
    			  })
    			  
         $http.get('/AdressVerwaltungAngularJS/rest/address/list').
    	  success(function(data)
    		{ 
    		  $scope.address2 = {};
    		  $scope.address2 = JSON.stringify(data)    		  
    		  $scope.address3 = data    		  
    			  })
    });