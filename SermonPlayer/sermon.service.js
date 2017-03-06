(function ()
{
    "use strict";

    angular.module('SermonPlayer')
    .service('SermonService', SermonService);

    SermonService.$inject = ['$http'];
    function SermonService($http)
    {
        var service = this;
        service.sermonInfo = [];

        service.getSermonInfo = function ()
        {
            var url = "http://192.168.1.105:8080/SERMONPLAYER-RS/rest/getLatestSermon";
//          var url = "http://71.234.246.37:8080/SERMONPLAYER-RS/rest/getLatestSermon";
//          var promise =  $http.get("http://192.168.1.105:8080/SERMONPLAYER-RS/rest/getLatestSermon").then(sermonInfoResponse).catch(sermonInfoError);
            var promise =  $http.get(url);
            return promise;
        };

    }

})();
