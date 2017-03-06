(function ()
{
  "use strict";

  angular.module('SermonPlayer')
     .controller('ItemRowController', ItemRowController)
     .component('spItemRow',
      {
        templateUrl: 'sp-item-row.html',
        bindings: {
          itemCount: '<',
          sermonTitle: '<',
          speaker: '<',
          sermonDate: '<'
        }
      }
  );

function ItemRowController() {
    var ItemRowController = this;
    this.itemCount = 1;
    this.sermonTitle = "Are Moral People an Endangered Species?";
    this.speaker = "Enar Rom";
    this.sermonDate = "February 11, 2017";

}

}
)();
