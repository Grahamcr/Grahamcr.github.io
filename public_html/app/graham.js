
'use strict';

angular.module('graham', [
    'ngResource',
    'graham.home',
    'graham.contact',
    'graham.about',
    'graham.gr',
    'graham.av',
    'graham.homenew',
    'graham.ct',
    'graham.is',
    'graham.pa',
    'graham.now'
    
]).config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
}]);



                
