angular.module('epaApp').directive('required', function() {
	return function(scope, element) {
		$(element).parents("tr").children(":nth-child(1)").children("label").append("<span class='warning'><strong>&nbsp;*</strong></span>");
	};
});