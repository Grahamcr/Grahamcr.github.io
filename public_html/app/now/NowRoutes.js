
(function() {
  
  'use strict';

  angular.module('graham.now')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/now', {
        controller: 'NOController',
        templateUrl: 'app/now/now.html'
      });
  }

}());
