
'use strict';

angular.module('graham', [
    'ngResource',
    'graham.home',
    'graham.contact',
    'graham.about'
    
]).config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
}]);



                
