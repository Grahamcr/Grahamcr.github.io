
(function() {
  
  'use strict';

  angular.module('graham.ct')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/ct', {
        controller: 'CTController',
        templateUrl: 'app/ct/ct.html'
      });
  }

}());
