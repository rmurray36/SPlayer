(function ()
{
  "use strict";

  angular.module('SermonPlayer')
     .component('spItemRow',
      {
        templateUrl: 'sp-item-row.html',
        controller: ItemRowController
      }
  );

  ItemRowController.$inject = ['SermonService'];
  function ItemRowController(SermonService) {

      //------------------------------------------------------------------------------------//
      // Define irc as this because 'this' used in the RESPONSE means something else and I  //
      // want the 'this' handle to the ItemRowController.                                   //
      //------------------------------------------------------------------------------------//
      var irc = this;

      var sermonInfo = SermonService.getSermonInfo();

      irc.title=sermonInfo.title;
      irc.speaker=sermonInfo.speaker;
      irc.date=sermonInfo.date;
      irc.filename=sermonInfo.filename;

      irc.getSermonTitle = function() {
          return irc.title;
      }

      irc.getSermonSpeaker = function() {
          return irc.speaker;
      }

      irc.getSermonDate = function() {
          return irc.date;
      }

      irc.getSermonFilename = function() {
          return irc.filename;
      }

    }
})();
