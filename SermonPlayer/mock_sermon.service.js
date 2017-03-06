(function ()
{
    "use strict";

    angular.module('SermonPlayer')
    .service('MockSermonService', MockSermonService);

    MockSermonService.$inject = ['$http','$q'];
    function MockSermonService($http, $q)
    {
        var service = this;
        service.sermonInfo = [];

        service.getSermonInfo = function ()
        {
            var rowItems = [];
            var info = new Object();
            var data = new Object();
            var sermon = new Object();
            sermon.title = "Title-A";
            sermon.speaker = "Speaker-A";
            sermon.date = "3/3/2017";
            sermon.file = "horse.ogg";
            data.sermon = sermon;
            info.data = data;
            rowItems.push(info);

            var p = $q.defer();
            p.resolve(rowItems);

            return p.promise;
        };

    }

})();
