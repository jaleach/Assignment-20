;( function (){

    "use strict";
app.Routers.MainRouter =Backbone.Router.extend({
initialize: function(options){
  var args=options || {};
  this.collection= args.collection;
},
routes:{
  '' : 'homePage',
  'pic/:id' : 'singlePhoto',
  'add' : 'addPhoto'
},
homePage: function(){
  new app.Views.Main({
    collection: this.collection
  });
},
addPhoto : function(){
  new app.Views.Add({
    collection : this.collection
  });
},
singlePhoto: function(id) {
  new app.Views.Single({
    singleId: id,
    collection: this.collection
  });
}

});

}());
