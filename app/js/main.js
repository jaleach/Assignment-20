;( function (){

    "use strict";


 var allAlbums = new app.Collections.Albums();
  allAlbums.fetch().done(function() {

    new app.Routers.MainRouter({
      collection: allAlbums
      });

    Backbone.history.start();
  });
}());
