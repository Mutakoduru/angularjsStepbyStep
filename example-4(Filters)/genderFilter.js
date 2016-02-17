/**
Defining a filter with name 'gender'. The Mr. or Miss. is prefixed with input value based on the passed gender value.
**/

angular.module('genderBySalutationApp').filter('gender', function() {
	return function(input, gender) {
		if(gender == 'MALE') {
			return ('Mr. ' + input);
		}
		else {
			return ('Miss. ' + input);
		}
	}
});