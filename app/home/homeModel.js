
  var Torso = require('torso');

  module.exports = Torso.Model.extend({
    talk: function() {
      alert('hello!');
    },
    defaults: {
      name: "Art Vandalay",
      title: "Miracle Worker",
      workplace: "Vecna Medical"
    }
});

