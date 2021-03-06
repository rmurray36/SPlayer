(function() {
  'use strict';

  angular.module('SermonPlayer')
         .config(routeConfig);

    routeConfig.$inject = ['$stateProvider','$urlRouterProvider'];
    function routeConfig ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'splayer.html',
            controller: 'PlayerController as IRC',
            resolve:{
                rowItems: [
                    'SermonService',
                    function (SermonService) {
                        return SermonService.retrieveSermonListFromServer();
                    }
                ]

            }
        })

    }

})();
