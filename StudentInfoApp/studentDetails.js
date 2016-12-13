angular.module('studentInfoApp').directive('students', function() {
	return {
		templateUrl: '/studentDetails.html',
		replace : true,
        controller: 'studentsDetailsController'
	};
}).controller('studentsDetailsController', ['$scope', function($scope) {
    $scope.students = [{name: 'Deepak Rana', roll: 1000, maths: 100}, {name: 'Tej', roll: 1001, maths: 89}, {name: 'Hema', roll: 1001, maths: 99}];
}]);;