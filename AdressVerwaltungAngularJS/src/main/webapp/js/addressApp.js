var addressApp = angular.module("addressApp", ['ngRoute']);

addressApp.config(function($routeProvider) {
	
	$routeProvider.when('/address', {
		templateUrl: 'templates/address_list.html', 
		controller : 'AddressListCtrl'
	})
	.when('/address/:addressID', {
		templateUrl: 'templates/address_detail.html', 
		controller : 'AddressDetailCtrl'
	})
	.when('/admin/address/new', {
		templateUrl: 'templates/address_form.html', 
		controller : 'AddressNewCtrl'
	})
	.when('/address/:addressID/edit', {
		templateUrl: 'templates/address_form.html', 
		controller : 'AddressEditCtrl'
	})
	.otherwise({
		redirectTo: 'address'
	});
});