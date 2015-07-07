
  var Torso = require('torso'),
      HomeModel = require('./homeModel');

  module.exports = Torso.Collection.extend({
    model: HomeModel,
    url: "https://restful/fortune"
});