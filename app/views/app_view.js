var BaseAppView = require('rendr/shared/base/app_view');

var $body = $('body');

module.exports = BaseAppView.extend({
  events: {
    "click .ZEEGA-tab":"openGrave",
    "click .ZEEGA-home":"closeGrave"
  },

  openGrave: function() {
    $(".slide").addClass("nav-open");
    $(".scroller").fadeIn();
    $(".ZEEGA-tab").fadeOut("fast");
  },

  closeGrave: function() {
    $(".slide").removeClass("nav-open");
    $(".scroller").fadeOut();
    $(".ZEEGA-tab").fadeIn("fast");

  },

  postInitialize: function() {
    this.app.on('change:loading', function(app, loading) {
      $body.toggleClass('loading', loading);
    }, this);
  }
});
