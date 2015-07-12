;( function (){

    "use strict";
    // refered to class bookmark ER

app.Views.Single = Backbone.View.extend({
  className: 'single',
  template: hbs.single,

initialize: function(options){
  var args = options || {};
  this.singleID = args.singleID;
  this.collection = args.collection;
  this.render();
  $('.container').html(this.el);
},
render: function(){
  var singleAlbum = this.collection.get(this.singleID);
  this.$el.html(this.template(singleAlbum.toJSON()));
}
});

}());
