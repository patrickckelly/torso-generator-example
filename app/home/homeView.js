var Torso = require('./webcore'),
    HomeModel = require('./homeModel'),
    $ = require('jquery');

HomeCollection = require('./homeCollection');
var collection = new HomeCollection();
var rCollection = collection.createPrivateCollection(1);



collection.fetch();

rCollection.on('cache-load-complete', function(){
});
$.ajax({
  url: "https://restful/fortune/ids"
}).then(function(result){
  rCollection.trackIds(result);
  rCollection.fetch();

});
var HomeViewClass = Torso.Views.List.extend({
  className: 'home-view-list'
});
var HomeView = new HomeViewClass({
  collection: rCollection,
  childModel: 'model',
  childView: require('./homeModelView'),
  template: require('./_homeView.hbs'),
  childrenContainer: 'home-spot'
});

module.exports = HomeView;
