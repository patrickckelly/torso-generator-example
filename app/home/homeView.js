var Torso = require('torso'),
    HomeModel = require('./homeModel'),
    Backbone = require('torso/node_modules/backbone');

HomeCollection = Torso.Collection.extend({
  model: HomeModel,
  url: "https://restful/fortune"
});

var collection = new HomeCollection();
var rCollection;
this.listenTo(collection, 'loading-done', function(){
  console.log('Listen Worked');
});
collection.fetch();


HomeElementView = Torso.View.extend({
  template: require('./_homeModelView.hbs')
});

HomeView = new Torso.ListView({
  collection: rCollection,
  childModel: 'model',
  childView: HomeElementView,
});

module.exports = HomeView;
