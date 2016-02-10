var votingApp = angular.module('votingApp', []);

votingApp.controller('VotingCntrl',
	['$scope', function($scope) {
		$scope.welcomeMsg = 'Test Your Voting Eligibility';
		$scope.rules = ['You should be above 18 years of age',
		'You should have a valid Voter Card',
		'Your name should be listed in the area voter list'];
				$scope.user = {name: 'hdfldfdjlf'}

	}
]);