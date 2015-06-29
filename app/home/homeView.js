var Torso = require('torso'),
    HomeModel = require('./homeModel'),
    HomeView;

HomeView = Torso.View.extend({
  template: require('./home-template.hbs'),

  initialize: function() {
    this.collection = new Torso.Collection({
    });
    this.model = new HomeModel({
    });
    this.collection.add(this.model);
    this.collection.add(new HomeModel({
      name: "Patrick"
    }));
    this.collection.add(new HomeModel({
      name: "Juan"
    }));
  },
  prepare: function(){
   console.log(this.collection.toJSON());
    return this.collection.toJSON();
  }
});

module.exports = new HomeView();
