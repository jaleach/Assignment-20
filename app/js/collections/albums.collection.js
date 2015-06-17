;( function (){

    "use strict";
var AlbumCollection = Backbone.Collection.extend({
  model: app.Models.Album,
  url: 'http://tiy-515.herokuapp.com/collections/thealbum'
});

}());


