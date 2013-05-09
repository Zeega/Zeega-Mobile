var BaseAppView = require('rendr/shared/base/app_view');

var $body = $('body');

module.exports = BaseAppView.extend({
  events: {
    "click": "logIt",
    "click .ZEEGA-tab": "openCoffin",
    "click .ZEEGA-home": "goHome",
    "click .content-overlay": "closeCoffin",
    "mousedown .message-overlay": "closeMessage"
  },

  logIt: function(e){
    console.log(e);
    this.closeMessage();
  },
  goHome: function(){
    
    this.closeCoffin();
    this.app.router.navigate("/", {trigger: true});
    console.log(this.app, this.app.router.current);
  },
  closeMessage: function(){
    this.app.router.navigate("/", {trigger: false});
    $(".message-overlay").hide();
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
