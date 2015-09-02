adressApp.controller("AddressController", function($scope, $http) {
	    $scope.edit = true;
	    $scope.error = false;
	    $scope.incomplete = false;
	    
	    $scope.bearbeitenAddress = function(addressId){
	    	if (addressId == 'new'){
	    		$scope.edit = true;
	    		$scope.incomplete = true;
	    		$scope.address = {};
	    	}
	    	else {
	    		$scope.edit = false;
	    		$http.get('/AdressVerwaltungAngularJS/rest/address/element/' + addressId).
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
	    
	    $scope.speichereAddress = function(address)
	    {
	    	$http.post('/AdressVerwaltungAngularJS/rest/address/neu/' + address);
	    }
	    
         $http.get('/AdressVerwaltungAngularJS/rest/address/list').
    	  success(function(data)
    		{ 
    		  $scope.address2 = {};
    		  $scope.address2 = JSON.stringify(data)    		  
    		  $scope.address3 = data    		  
    			  })
    });