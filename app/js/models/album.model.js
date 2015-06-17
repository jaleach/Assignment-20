;( function (){

    "use strict";
  app.Models.Albums = Backbone.Model.extend({
    idAttribute: '_id',
    defaults:  {
      url: '',
      visited: false,
      title: ''
    }
  });

}());


