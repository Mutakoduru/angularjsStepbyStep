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