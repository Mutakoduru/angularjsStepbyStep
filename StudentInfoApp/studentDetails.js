angular.module('studentInfoApp').directive('studentsList', function() {
	return {
		templateUrl: '/studentDetails.html',
		replace : true,
        scope: {
            students: '=',
            tableHeading: '@'
        },
        link: function(){
            
        },
        controller: 'studentsDetailsController'
	};
}).controller('studentsDetailsController', ['$scope', function($scope) {
    $scope.removeSt = function(roll) {
        $scope.removeStudent(roll);
    }
}]);