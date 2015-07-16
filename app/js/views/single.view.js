;( function (){

    "use strict";
    // refered to class bookmark ER

app.Views.Single = Backbone.View.extend({
  className: 'single',
  template: hbs.single,

initialize: function(options){
  var args = options || {};
  this.singleId = args.singleId;
  this.collection = args.collection;
  this.render();
  $('.container').html(this.el);
},
render: function(){
  var singleAlbum = this.collection.get(this.singleId);
  this.$el.html(this.template(singleAlbum.toJSON()));
}
});

}());
