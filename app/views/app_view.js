var BaseAppView = require('rendr/shared/base/app_view');
var Hammer = require("../hammer");
var $body = $('body');

module.exports = BaseAppView.extend({
  
  goHome: function(){ 
    console.log("goHome")
    this.closeCoffin();
    if( this.app.router.currentFragment !== "" ){
      this.app.router.navigate("/", {trigger: true});
    }
    
  },
  closeMessage: function(){
    console.log("closeMessage")
    this.app.router.navigate("/", {trigger: false});
    $(".message-overlay").hide();
  },
  

  closeCoffin: function() {
    console.log("closeCoffin")
    $(".action").removeClass("nav-open");
    $(".scroller").fadeOut();
    window.scrollTo(0, 1);
  },

  postInitialize: function() {
    var closeMessage = $.proxy( this.closeMessage, this),
        goHome = $.proxy( this.goHome, this),
        closeCoffin =  $.proxy( this.closeCoffin, this);


        Hammer($(".message-overlay")[0]).on("tap", function(event) {
          closeMessage();
          return false;
        }, this);
        Hammer($(".content-overlay")[0]).on("swipeleft", function(event) {
          closeCoffin();
          return false;
        }, this);
        Hammer($(".ZEEGA-home")[0]).on("tap", function(event) {
          goHome();
          return false;
        }, this);
        setTimeout(function () {  window.scrollTo(0, 1); }, 1000);
  }
});
