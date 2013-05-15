var BaseApp = require('rendr/shared/app');

module.exports = BaseApp.extend({
  defaults: {
    loading: false
  },

  // @client
  start: function() {

    

    // Call 'super'.
    BaseApp.prototype.start.call(this);
  }

});
