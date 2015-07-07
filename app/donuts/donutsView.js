var Torso = require('./webcore'),
    $ = require('jquery');

var DonutCollection = require('./donutCollection');
var collection = new DonutCollection();
var rCollection = collection.createPrivateCollection(1);

collection.fetch();

$.ajax({
  url: "https://restful/fortune/ids"
}).then(function(result){
  rCollection.trackIds(result);
  rCollection.fetch();
});

var DonutViewClass = Torso.Views.List.extend({
  className: 'donut-view-list'
});
var DonutView = new DonutViewClass({
  collection: rCollection,
  childModel: 'model',
  childView: require('./_donutView'),
  template: require('./_donutsView.hbs'),
  childrenContainer: 'donut-spot'
});

module.exports = DonutView;
