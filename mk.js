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
    .state('registry', {
      url: '/registry',
      templateUrl: 'partials/registry.html',
      controller : 'RegistryCtrl',
    })
    .state('photos', {
      url: '/photos',
      templateUrl: 'partials/photos.html',
      controller : 'PhotosCtrl',
    })
    .state('rsvp', {
      url: '/rsvp',
      templateUrl: 'partials/rsvp.html',
      controller : 'RSVPCtrl',
    });

  $urlRouterProvider.otherwise('/');

}).

run(function($rootScope){
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
}).

controller('HomeCtrl', ['$scope', function($scope) {} ]).
controller('AccommodationsCtrl', ['$scope', function($scope) {} ]).
controller('RSVPCtrl', ['$scope', function($scope) {} ]).
controller('PhotosCtrl', ['$scope', function($scope) {} ]).
controller('RegistryCtrl', ['$scope', function($scope) {} ]);
