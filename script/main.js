(function() {

	require(['Customer/customerModule',
		'Organisation/organisationModule',
		'Reciept/recieptModule'], function(customerModule, organisationModule, recieptModule) {

		var appModule = angular.module("appModule", ['customerModule', 'organisationModule', 'recieptModule']);

		angular.bootstrap(document, ['appModule']);

	});

})();