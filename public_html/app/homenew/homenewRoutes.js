
(function() {
  
  'use strict';

  angular.module('graham.homenew')
    .config(config);

  /**
  * Defines a route to the challenge controller and view
  * @param {Object} $routeProvider The routeProvider to configure
  */
  function config($routeProvider) 
  {
    $routeProvider
      .when('/', {
        controller: 'HomenewController',
        templateUrl: 'app/homenew/homenew.html'
      });
  }

}());
