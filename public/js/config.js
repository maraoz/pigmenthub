'use strict';

//Setting up route
angular.module('mystery').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/block/:blockHash', {
      templateUrl: 'views/block.html'
    }).
    when('/tx/:txId', {
      templateUrl: 'views/transaction.html'
    }).
    when('/', {
      templateUrl: 'views/index.html'
    }).
    when('/blocks', {
      templateUrl: 'views/blocks/list.html'
    }).
    when('/blocks-date/:blockDate', {
      templateUrl: 'views/blocks/list.html'
    }).
    when('/address/:address', {
      templateUrl: 'views/address.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);

//Setting HTML5 Location Mode
angular.module('mystery').config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);
