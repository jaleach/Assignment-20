;( function (){

    "use strict";

    app.Views.Add = Backbone.View.extend({
      className: 'add',


    events: {
      'submit #addAlbum' : 'addAlbum'

  },
  template: hbs.add,
  initialize:  function (options){
    var args = options || {};
    this.collection = args.collection;
    this.render();
    $('.container').html(this.el);
  },
  render: function(){
    this.$el.html(this.template);
  },
  addAlbum: function(event){
    event.preventDefault();

    var self = this,
      form = $(event.target),
      URL =  form.find('#picURL').val(),
      title = form.find('#picPerson').val(),
      description = form.find('#description').val();
    var pict = new app.Models.Album ({
      title : title,
      URL : URL,
      description : description

    });

  this.collection.add(pict).save().success(function(){
    console.log('ya baby')
    self.render();

  });


  }



});





}());
