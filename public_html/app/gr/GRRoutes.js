
(function() {
  
  'use strict';

  angular.module('graham.gr')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/gr', {
        controller: 'GRController',
        templateUrl: 'app/gr/gr.html'
      });
  }

}());
