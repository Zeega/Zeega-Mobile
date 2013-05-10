var BaseView = require("./base_view");

module.exports = BaseView.extend({
    className: "home_index_view",
    events: {
        "click .profile-link":"toProfile",
        "click .ZEEGA-tab":"openCoffin"
    },
    toProfile: function( e ){
        this.app.router.navigate( "profile/" + $(e.currentTarget).data("id"), { trigger: true } );
    },
    openCoffin: function( e ) {
        $(".action").addClass("nav-open");
        $(".scroller").fadeIn();
    },
    postRender: function() {
        if( this.app.router.currentFragment == "project/new" ){
            $(".message-overlay").show();
        }
    }
});
module.exports.id = "HomeIndexView";
