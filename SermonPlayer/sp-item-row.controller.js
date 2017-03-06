(function () {
    'use strict';

    angular.module('SermonPlayer')
    .controller('ItemRowController', ItemRowController);

    ItemRowController.$inject = ['rowItems'];
    function ItemRowController(rowItems) {

        //------------------------------------------------------------------------------------//
        // Define irc as this because 'this' used in the RESPONSE means something else and I  //
        // want the 'this' handle to the ItemRowController.                                   //
        //------------------------------------------------------------------------------------//
        var irc = this;
        var sermonItems = rowItems;
        irc.title=rowItems[0].data.sermon.title;
        irc.speaker=rowItems[0].data.sermon.speaker;
        irc.date=rowItems[0].data.sermon.date;
        irc.filename=rowItems[0].data.sermon.file;

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
}) ();


// (function () {
//     'use strict';
//
//     angular.module('SermonPlayer')
//     .controller('ItemRowController', ItemRowController);
//
//       ItemRowController.$inject = ['SermonService'];
//       function ItemRowController(SermonService) {
//         //------------------------------------------------------------------------------------//
//         // Define irc as this because 'this' used in the RESPONSE means something else and I  //
//         // want the 'this' handle to the ItemRowController.                                   //
//         //------------------------------------------------------------------------------------//
//         var irc = this;
//
//         irc.sermonInfoPromiseResponse = function(response) {
//           var responseData = response.data;
//           irc.title = responseData.sermon.title;
//           irc.date = responseData.sermon.date;
//           irc.speaker = responseData.sermon.speaker;
//           irc.filename = responseData.sermon.file;
//         }
//
//         irc.sermonInfoPromiseError = function(error) {
//           console.log("Error", error);
//         }
//
//         irc.getSermonTitle = function() {
//             return irc.title;
//         }
//
//         irc.getSermonSpeaker = function() {
//             return irc.speaker;
//         }
//
//         irc.getSermonDate = function() {
//             return irc.date;
//         }
//
//         irc.getSermonFilename = function() {
//             return irc.filename;
//         }
//
//         //------------------------------------------------------------------------------------//
//         // I found that the Response and Error methods need to be declared BEFORE I call them //
//         // when they are placed in the same method.                                           //
//         //------------------------------------------------------------------------------------//
//          var sermonInfoPromise = SermonService.getSermonInfo();
//          sermonInfoPromise.then(irc.sermonInfoPromiseResponse).catch(irc.sermonInfoPromiseError);
//       }
//
//
//
// }) ();
