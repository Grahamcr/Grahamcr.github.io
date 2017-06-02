
(function() {

  'use strict';

  angular.module('graham.contact')
    .controller('ContactController', Contact);

  /*******************************************************************************
  * 
  ********************************************************************************/
  function Contact($scope, $location, $window){
      
      
      /*******************************************************************************
      *  Global Variables
      ********************************************************************************/
      $scope.home = false;
      $scope.contact = 'active';
      $scope.about = false;
      /*******************************************************************************
      *  Close the given popup
      ********************************************************************************/
      $scope.close = function(id) {
          $('#'+id).hide();
          $('#contact-overlay').hide();
      };
      
      
      ga('set', 'page', '/contact.html');
      ga('send', 'pageview');
      
      
      /*******************************************************************************
      *  Send the feedback to MyApps Admin using ajax call
      ********************************************************************************/
      $scope.send = function(cinfo) {
          if(cinfo && cinfo.subject.length > 1 && cinfo.body.length > 1) {
            window.open('mailto:grahamcr.gvsu@gmail.com?subject=Message From '+ cinfo.subject +'&body='+cinfo.body + '\n\r\n\r -- ' + cinfo.email);
          }
          
          /**$.ajax('https://api.mailgun.net/v3/sandbox719c6fe37304409e9f4a95c731c9f17d.mailgun.org/messages',
            {
                type:"POST",
                username: 'api',
                password: 'key-13dcb9507d12e7582ff48af282c32eb0',
                data:{
                    "html": `<h1>A Email From My Site</h1>`,
                    "subject": "Testing Email",
                    "from": "User<cgdesign@cgdesign.com>",
                    "to": "<grahamcr.gvsu@gmail.com>"
                },
                success:function(a,b,c){
                    console.log( 'mail sent: ', b );
                }.bind(this),
                error:function( xhr, status, errText ){console.log( 'mail sent failed: ', xhr.responseText );}
            });
              **/
          else {
              alert("Looks like something is missing");
          }
      };
      
      
    
    /***************************************************************************************
    * On Page Load Function
    ****************************************************************************************/   
		angular.element(document).ready(function () {

    });
      
};




}());


    