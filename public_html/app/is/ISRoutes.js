
(function() {
  
  'use strict';

  angular.module('graham.is')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/is', {
        controller: 'ISController',
        templateUrl: 'app/is/is.html'
      });
  }

}());
