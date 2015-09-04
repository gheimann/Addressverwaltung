'use strict'

addressApp.factory('AddressDataService', function($http) {
	
	var srv = {};
	
	srv.getAddressByAddressId = function(addressId){

        return $http.get('/AdressVerwaltungAngularJS/rest/address/element/' + addressId);
	};
	
	srv.getAddress = function() {
		
		return $http.get('/AdressVerwaltungAngularJS/rest/address/list');
		
	};
	
	
	// Public API (API Object)
	return{
		getAddressByAddressId: function(addressId){
			return srv.getAddressByAddressId(addressId);
			
		},
	    getAddress: function(){
		return srv.getAddress();
		
	}
	};
	
});