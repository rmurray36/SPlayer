(function () {
    'use strict';

    angular.module('SermonPlayer')
    .controller('PlayerController', PlayerController);

    PlayerController.$inject = ['rowItems', 'SermonService'];
    function PlayerController(rowItems, SermonService) {

        var pc = this;
        var sermon = rowItems.data.sermons.pop();
        pc.title=sermon.title;
        pc.speaker=sermon.speaker;
        pc.date=sermon.date;
        pc.filename=sermon.filename;

        //SermonService.setSermonInfo(pc.title,pc.speaker,pc.date,pc.filename);
        console.log("Echo sermon list");
        console.log(rowItems.data.sermons);
        SermonService.setSermonListInfo(rowItems.data.sermons);
    }
}) ();
