define(['Reciept/recieptController'], function (recieptController) {

	var recieptModule = angular.module('recieptModule', []);

	recieptModule.controller('recieptController', recieptController);

	return recieptModule;

});