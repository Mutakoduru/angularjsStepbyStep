/**
This example calculates employee's maximum eligible amount under EAP.
In the corresponding 'emp-emp-form.html' file we have declared Emp Name and CTC as required field 
but there is no html element with '*' symbol in this file.
We are creating this element in 'requiredDirective.js' via a custom directive.
Further, we are using Angular Form Validation to know more about this refer: https://docs.angularjs.org/guide/forms 
**/

var app = angular.module('epaApp', []);

app.controller('EPACntrl',
	['$scope', function($scope) {

		$scope.calculateAmt = function() {
			if($scope.employeeForm.$valid && !$scope.employeeForm.$pristine) {
				$scope.emp.epaAmt = $scope.emp.ctc / 12;
			}
		}

	}
]);