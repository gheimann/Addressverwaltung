addressApp.controller("AddressDetailCtrl", function($scope, $http, $routeParams, AddressDataService) {
	var addressID = $routeParams.addressID
	
	AddressDataService.getAddressByAddressId(addressID).then(function(res) {
		$scope.address = res.data;
	}, function(error) {
		console.log('Lesen der Adresse fehlerhaft.' + error);
	});
	
    });