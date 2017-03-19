
var express = require('express');
var audioFileRouter = express.Router();

audioFileRouter.route('/')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
});

//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
audioFileRouter.route('/allSermons')
.all(function(req,res,next) {
      res.set('Access-Control-Allow-Origin','*');
      res.set('Access-Control-Allow-Methods','GET,POST,DELETE,PUT');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      next();
})
.get(function(req,res,next){
    var sermons =      "{ " +
                            "\"sermons\": [" +
                                   "{\"title\": \"Are Moral People an Endangered Species? Part I\",\"speaker\": \"Enar Rom\",\"date\": \"2/11/2017\",\"filename\": \"EnarRom11192016.mp3\"}," +
                                   "{\"title\": \"Are Moral People an Endangered Species? Part II\",\"speaker\": \"Enar Rom\",\"date\": \"3/11/2017\",\"filename\": \"EnarRom11192016.mp3\"}," +
                                   "{\"title\": \"Are Moral People an Endangered Species? Part III\",\"speaker\": \"Enar Rom\",\"date\": \"4/11/2017\",\"filename\": \"EnarRom11192016.mp3\"}," +
                                   "{\"title\": \"Are Moral People an Endangered Species? Part IV\",\"speaker\": \"Enar Rom\",\"date\": \"5/11/2017\",\"filename\": \"EnarRom11192016.mp3\"}," +
                                   "{\"title\": \"Are Moral People an Endangered Species? Part V\",\"speaker\": \"Enar Rom\",\"date\": \"6/11/2017\",\"filename\": \"EnarRom11192016.mp3\"}" +
                            "]" +
                     "}";
    res.end(sermons);
});

//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
audioFileRouter.route('/sermon/:fileId')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})
.get(function(req,res,next){
    var sermon =      "{ " +
                            "\"sermons\": [" +
                                   "{\"title\": \"Are Moral People an Endangered Species? Part I\",\"speaker\": \"Enar Rom\",\"date\": \"2/11/2017\",\"filename\": \"EnarRom11192016.mp3\"}," +
                            "]" +
                     "}";
    res.end(sermon);
});

module.exports = audioFileRouter;
