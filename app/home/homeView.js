var Torso = require('torso');

module.exports = new (Torso.View.extend({
  template: require('./home-template.hbs'),
  model: new (Torso.Model.extend({
    a: 1,
    b: 2,
  }))
}))();
