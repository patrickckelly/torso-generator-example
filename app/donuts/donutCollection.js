
  var Torso = require('torso'),
      DonutModel = require('./donutModel');

  module.exports = Torso.Collection.extend({
    model: DonutModel,
    url: "https://restful/donuts"
});