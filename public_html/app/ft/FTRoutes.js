
(function() {
  
  'use strict';

  angular.module('graham.ft')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  *
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/ft', {
        controller: 'FTController',
        templateUrl: 'app/ft/ft.html'
      });
  }

}());
