angular.module('studentApp').controller('StudentCntrl',
	['$scope', function($scope) {

		$scope.print = function() {
				$scope.showMsg = true;
		}

	}
]);