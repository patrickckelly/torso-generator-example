var Torso = require('torso'),
      HomeModel = require('./homeModel');

  module.exports =  Torso.View.extend({
  template: require('./_homeModelView.hbs'),

  prepare: function() {
    return this.model.toJSON();
  },

  render: function() {
    this.templateRender(this.$el, this.template, this.prepare());
    this.delegateEvents();
  }
});