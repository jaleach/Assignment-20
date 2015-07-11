;( function (){

    "use strict";
  app.Models.Album = Backbone.Model.extend({
    idAttribute: '_id',
    defaults:  {
      id: '',
      url: '',
      title: '',
      image: '',
      description ''
    }
  });

}());


