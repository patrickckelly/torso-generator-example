var Torso = require('torso'),
    HomeModel = require('./homeModel'),
    HomeView,
    Backbone = require('torso/node_modules/backbone');

HomeView = Torso.ListView.extend({
  template: require('./home-template.hbs'),

  initialize: function() {
   var MyCustomCollection = Torso.Collection.extend({
    model: HomeModel,
    url: "https://restful/fortune"
   });
   var self = this;
   this.collection = new MyCustomCollection();
   var myPrivateCollection = this.collection.createPrivateCollection();
   console.log('Private Collection', myPrivateCollection);


   myPrivateCollection.on('load-complete', function(myPrivateCollection){
    console.log('RequesterCollection: ', this);
   })
   myPrivateCollection.fetch()
   this.collection.on('sync', function(collection) {
    console.log('Method 3 (Events)', collection.toJSON());
    self.render();
   });
   this.collection.fetch();
  },

  prepare: function(){
    console.log(this.collection.toJSON());
    return this.collection.toJSON();
  },


});

module.exports = new HomeView();
