;( function (){

    "use strict";

    app.Views.AddView = Backbone.View.extend({
      className: 'add',
      template: hbs.add,

    events: {
      'submit #addAlbum' : 'addAlbum'

  },
  initialize:  function (options){
    var args = options || {};
    this.collection = args.collections;
    this.render();
    $('container').html(this.el);
  },
  render: function(){
    this.$el.html(this.template);
  },
  addPic: function(event){
    event.preventDefault();

    var self = this,
      form = $(event.target),
      URL =  form.find('#picURL').val(),
      title = form.find('#picPerson').val(),
      // image = form.find('#pic').val(),
      description = form.find('#description').val;
    var pict = new app.Models.Album ({
      title : title,
      URL : URL,
      description : description

    });
  this.collection.add(pict).save().success(function(){
    self.render();

  });


  }



});





}());
