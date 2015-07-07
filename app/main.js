var Torso = require('../node_modules/backbone-torso'),
    $ = require('jquery');

require('./mockdata');
require('backbone').$ = $;

// Expose some globals
window.$ = $;
window.jQuery = $;

require('brec-base/js/alerts');

$(window).ready(function () {

  /**
   * The application router object
   */
  var app = new (Torso.Router.extend({
    current: null,
    routes: {
      '': 'index',
      'donuts': 'donut',
      'index': 'index'
    },

    donut: function(){
      this.switchPerspective(require('./donuts/donutsView'));
    },
    /**
     * Stop the history if it's already started. Bind the routes, and start.
     * and start the history.
     * @method start
     */
    start: function() {
      Torso.history.stop();
      this._bindRoutes();
      Torso.history.start();
    },

    /**
     * Initialize the medicine widgets and page layout
     */
    index: function() {
      this.switchPerspective(require('./home/homeView'));
    },

    /**
     * Switches the current perspective to be the given perspective.
     */
    switchPerspective: function(nextPerspective) {
      console.log('This.Current: ', this.current);
      if (this.current) {
        this.current.detach();
      }
      this.current = nextPerspective;
      this.current.render();
      //this.current.attach($('.app'));
      $('.app').html('').append(this.current.$el);
    }
  }))();
  app.start();
  window.app = app;
});

