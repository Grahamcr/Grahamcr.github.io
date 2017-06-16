
(function() {

  'use strict';

  angular.module('graham.pa')
    .controller('PAController', PA);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function PA($scope, $location, $window){
      
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      $scope.portfolio = false;
      $scope.contact = false;
      $scope.about = false;
      $scope.case = true;
      
     
      ga('set', 'page', '/pa.html');
      ga('send', 'pageview');
      
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {

    });
      
};




}());


    