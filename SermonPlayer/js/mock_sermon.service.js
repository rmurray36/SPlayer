(function ()
{
    "use strict";

    angular.module('SermonPlayer')
    .service('MockSermonService', MockSermonService);

    MockSermonService.$inject = ['$http','$q'];
    function MockSermonService($http, $q)
    {
        var service = this;
        service.sermons = [];

        service.loadSermonInfo = function ()
        {
            var rowItems = [];
            var info = new Object();
            var data = new Object();
            var sermon = new Object();
            sermon.title = "Title-A";
            sermon.speaker = "Speaker-A";
            sermon.date = "3/3/2017";
            sermon.file = "EnarRom11192016.mp3";
            data.sermon = sermon;
            info.data = data;
            rowItems.push(info);

            var p = $q.defer();
            p.resolve(rowItems);

            return p.promise;
        };

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
