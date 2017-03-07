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
            var url = "http://192.168.1.105:8080/SERMONPLAYER-RS/rest/getLatestSermon";
//          var url = "http://71.234.246.37:8080/SERMONPLAYER-RS/rest/getLatestSermon";
//          var promise =  $http.get("http://192.168.1.105:8080/SERMONPLAYER-RS/rest/getLatestSermon").then(sermonInfoResponse).catch(sermonInfoError);
            var promise =  $http.get(url);
            return promise;
        };

        service.setSermonListInfo = function(sermonList) {
            service.sermons = sermonList;
        }

        service.getSermonListInfo = function() {
            return service.sermons;
        }

        service.setSermonInfo = function(title,speaker,date,filename){
            var sermon = new Object();
            sermon.title = title;
            sermon.speaker = speaker;
            sermon.date = date;
            sermon.filename = filename;
            service.sermons.push(sermon);
        }

        service.getSermonInfo = function() {
            return service.sermons.pop();
        }

    }

})();
