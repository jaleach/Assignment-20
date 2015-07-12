;(function (){

  "use strict";

// refered to class bookmark ER
app.Views.Main = Backbone.View.extend({

className:'main',

template: hbs.main,

initialize: function(options){
var args = options || {};
this.collection = args.collection;

this.render();
$(".container").html(this.el);
},
render: function(){
  this.$el.html(this.template({album: this.collection.toJSON()}));
}


//from initial start, not working
// addPhoto: function(event){
//   event.preventDefault();
//   var ppic = this,
//       form = $(event.target),
//       name = form.find('#albumName').val(),
//       pic = form.find('#albumPic').val();
//   var a = new app.Models.Album({
//     pic: pic,
//     name: name

//   });
// this.collection.add(a).save().success(function(){ self.render();


});






}());
