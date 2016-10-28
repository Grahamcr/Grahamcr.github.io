/* 
 * Copyright (c) 2015 General Electric Company. All rights reserved.
 * 
 * The copyright to the computer software herein is the property of
 General Electric Company. The software may be used and/or copied only
 with the written permission of General Electric Company or in accordance
 with the terms and conditions stipulated in the agreement/contract
 under which the software has been supplied.
 */
'use strict';

angular.module('graham.home')



/*****************************************************************************************
* Used locally for front-end development by Craig to mock JSON for posts
*****************************************************************************************/
.factory('ExampleService', function ($resource, $http) {
    return {
        getTeamInfo: function () {
            return $http.get('app/home/exampleInfo/exampleinfo.json');
        }
    };
})


;
