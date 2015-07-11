;( function (){

    "use strict";
  app.Collections.Albums = Backbone.Collection.extend({
  model: app.Models.Album,

  url: app.rootURL

});

}());


