var app = angular.module('genderBySalutationApp', []);

app.controller('GenderCntrl',
	['$scope', function($scope) {
		$scope.genders = [{id: 'MALE', label: 'Male'}, {id: 'FEMALE', label: 'Female'}];
		$scope.user = {};
	}
]);