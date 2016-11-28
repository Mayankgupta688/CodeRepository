define(['Customer/customerController'], function (customerController) {

	var customerModule = angular.module('customerModule', []);

	customerModule.controller('customerController', customerController);

	return customerModule;

});