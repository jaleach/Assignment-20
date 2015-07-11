;( function (){

    "use strict";

    app.Views.AddView = Backbone.View.angular.extend({
      className: 'add',
      template: hbs.add,

    events: {
      'submit #addPic' : 'addPic'

  },
  initialize:  funciton (options){
    var args = options || {};
    this.collection = args.collections;
    this.render();
    $('content').html(this.el);
  },
  addPic; function(event){
    event.preventDefault();

    var self = this,
      form = $(event.target),
      URL =  form.find('#albumURL').val(),
      title = form.find('#picTitle').val(),
      image = form.find('#pic').val(),
      description = form.find('#description').val;
    var pict = new.app.Models.Album.Pic({
      title : title,
      image : image,
      description : description

    });
  this.collection.add(pict).save().success(function(){

  });


  }









}());
