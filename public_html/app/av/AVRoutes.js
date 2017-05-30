
(function() {
  
  'use strict';

  angular.module('graham.av')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/av', {
        controller: 'AVController',
        templateUrl: 'app/av/av.html'
      });
  }

}());
