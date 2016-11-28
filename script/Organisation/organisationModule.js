define(['Organisation/organisationController'], function (organisationController) {

	var organisationModule = angular.module('organisationModule', []);

	organisationModule.controller('organisationController', organisationController);

	return organisationModule;

});