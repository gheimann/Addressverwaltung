'use strict'

addressApp.factory('AddressDataService', function($http) {

	var srv = {};

	srv.getAddressByAddressId = function(addressId) {
		return $http.get('/AdressVerwaltungAngularJS/rest/address/element/'
				+ addressId);
	};

	srv.getAddress = function() {
		return $http.get('/AdressVerwaltungAngularJS/rest/address/list');
	};

	srv.storeAddress = function(address) {
		return $http.post('/AdressVerwaltungAngularJS/rest/address/new', address);
	};
	srv.updateAddress = function(addressId, address) {
		return $http.put('/AdressVerwaltungAngularJS/rest/address/update/' + addressId, address);
	};
	srv.deleteAddress = function(addressId) {
		return $http.delete('/AdressVerwaltungAngularJS/rest/address/delete/' + addressId);
		
	};

	// Public API (API Object)
	return {
		getAddressByAddressId : function(addressId) {
			return srv.getAddressByAddressId(addressId);

		},
		getAddress : function() {
			return srv.getAddress();

		},
		updateAddress : function(addressId, address) {
			return srv.updateAddress(addressId, address);

		},
		storeAddress : function(address) {
			return srv.storeAddress(address);

		},
		deleteAddress : function(addressId) {
			return srv.deleteAddress(addressId);

		}
	};

});