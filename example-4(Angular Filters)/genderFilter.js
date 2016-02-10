angular.module('userInfoApp').filter('gender', function() {
	return function(input, gender) {

		if(typeof gender === 'string') {
			switch(gender.toUpperCase()) {
				case 'MALE': 
					return ('Mr. ' + input);
				case 'FEMALE':
					return ('Miss. ' + input);
				default:
					//throw error
				break;
			}
		}
	}
});