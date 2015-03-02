;(function () {

	'use strict';

	angular.module('Top5', ['ngRoute'])


	.constant('PARSE', {

		URL: 'https://api.parse.com/1/',
		
		CONFIG: {
			
			headers: {
					'X-Parse-Application-Id': 'Lpud5B3WK1T1oZ5zIzoh92wR7Dp5HpCd0HxImwrY',
					'X-Parse-REST-API-Key': 'HR3kiVtmdoiZbBl2C4fBPFgaKMrCWSOgaTZ6E993',
					'Content-Type': 'application/json'
			}

		}
	})

	.config([ '$routeProvider', function ($routeProvider) {

		$routeProvider

		.when('/', {
			templateUrl: 'scripts/lists/lists.home.tpl.html',
			controller: 'ListCtrl'
		})

		.when ('/login', {
			//login page
		})

		.when('/register', {
			//register page
		});



	}]);




}());