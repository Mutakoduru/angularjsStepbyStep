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