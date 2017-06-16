
(function() {
  
  'use strict';

  angular.module('graham.pa')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/pa', {
        controller: 'PAController',
        templateUrl: 'app/pa/pa.html'
      });
  }

}());
