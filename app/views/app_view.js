var BaseAppView = require('rendr/shared/base/app_view');

var $body = $('body');

module.exports = BaseAppView.extend({
  events: {
    "click .ZEEGA-tab":"openGrave",
    "click .ZEEGA-home":"closeGrave"
  },

  openGrave: function() {
    $("#content").animate({"left":"43%"}, 500 );
    $(".ZEEGA-tab").fadeOut("fast");
  },

  closeGrave: function() {
    $("#content").animate({"left":0}, 500 );
    $(".ZEEGA-tab").fadeIn("fast");
  },

  postInitialize: function() {
    this.app.on('change:loading', function(app, loading) {
      $body.toggleClass('loading', loading);
    }, this);
  }
});
