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

}).

controller('HomeCtrl', ['$scope', function($scope) {
  $scope.photos = [
    {
      "name": "Yosemite",
      "url": "img/ideas/us/yosemite.jpg"
    },
    {
      "name": "Switzerland",
      "url": "img/ideas/us/switzerland.jpg"
    },
    {
      "name": "St. Helens",
      "url": "img/ideas/us/sthelens.jpg"
    }
  ];
}
]).

controller('AccommodationsCtrl', ['$scope', function($scope) {}
]).

controller('RSVPCtrl', ['$scope', function($scope) {}
]);
