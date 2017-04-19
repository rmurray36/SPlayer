(function ()
{
    "use strict";

    angular.module('SermonPlayer')
    .service('SermonService', SermonService);

    SermonService.$inject = ['$http'];
    function SermonService($http)
    {
        var service = this;
        service.sermons = [];

        service.retrieveSermonListFromServer = function ()
        {
//            var url = "http://localhost:3200/audioFiles/allSermons";
            var url = "http://localhost:3200/audioFiles/allSermonsFromFile";
            var promise =  $http.get(url);
            return promise;
        };

        service.setSermonListInfo = function(sermonList) {
            service.sermons = sermonList;
        }

        service.getSermonListInfo = function() {
            return service.sermons;
        }

    }

})();
