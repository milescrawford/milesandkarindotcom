angular.module('mk', [
  'ui.router'
]).

config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html',
      controller : 'HomeCtrl',
    })
    .state('accommodations', {
      url: '/accommodations',
      templateUrl: 'partials/accommodations.html',
      controller : 'AccommodationsCtrl',
    })
    .state('rsvp', {
      url: '/rsvp',
      templateUrl: 'partials/rsvp.html',
      controller : 'RSVPCtrl',
    });

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}).

controller('HomeCtrl', ['$scope', function($scope) {}
]).

controller('AccommodationsCtrl', ['$scope', function($scope) {}
]).

controller('RSVPCtrl', ['$scope', function($scope) {}
]);
