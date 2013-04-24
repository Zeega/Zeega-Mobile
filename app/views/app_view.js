var BaseAppView = require('rendr/shared/base/app_view');

var $body = $('body');

module.exports = BaseAppView.extend({
  events: {
    "click .ZEEGA-tab": "openCoffin",
    "click .ZEEGA-home": "closeCoffin",
    "click .content-overlay": "closeCoffin"
  },

  openCoffin: function() {
    $(".action").addClass("nav-open");
    $(".scroller").fadeIn();
  },

  closeCoffin: function() {
    $(".action").removeClass("nav-open");
    $(".scroller").fadeOut();
  },

  postInitialize: function() {
    this.app.on('change:loading', function(app, loading) {
      $body.toggleClass('loading', loading);
    }, this);
    setTimeout(function () {   window.scrollTo(0, 1); }, 1000);
  }
});
