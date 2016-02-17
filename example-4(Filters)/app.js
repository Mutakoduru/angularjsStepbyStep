/**
This example says hi to user with proper salutation(Mr./Miss.) based upon the user's gender.
This is done using gender filter defined in genderFilter.js file.
**/

var app = angular.module('genderBySalutationApp', []);

app.controller('GenderCntrl',
	['$scope', function($scope) {
		$scope.genders = [{id: 'MALE', label: 'Male'}, {id: 'FEMALE', label: 'Female'}];
		$scope.user = {};
	}
]);