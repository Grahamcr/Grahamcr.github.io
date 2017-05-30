
'use strict';

angular.module('graham', [
    'ngResource',
    'graham.home',
    'graham.contact',
    'graham.about',
    'graham.gr',
    'graham.av'
    
]).config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
}]);



                
