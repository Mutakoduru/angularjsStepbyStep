var app = angular.module('votingEligibilityApp', []);

app.controller('votingEligibilityController', ['$scope', function($scope) {
    $scope.showMsg = false;

    $scope.numbers = [];
    for(var count = 1; count <= 200; count++) {
        $scope.numbers.push(count);
    }

    $scope.checkEligibility = function() {
        if($scope.userAge >= 18) {
            $scope.msg = 'eligible';
        }
        else {
            $scope.msg = 'not eligible';
        }
        $scope.showMsg = true;
    }
}]);