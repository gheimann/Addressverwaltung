addressApp.controller("AddressDetailCtrl", function($scope, $http, $routeParams) {
	var addressID = $routeParams.addressID
         $http.get('/AdressVerwaltungAngularJS/rest/address/element/' + addressID).
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
    });