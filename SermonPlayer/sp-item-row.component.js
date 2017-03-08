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
      // SermonService is used to share sermonInfo between controllers.                     //
      //------------------------------------------------------------------------------------//
      var irc = this;
      irc.sermonInfo = SermonService.getSermonListInfo();

      irc.getSermonListInfo = function() {
        return irc.sermonInfo;
      }

    }
})();
