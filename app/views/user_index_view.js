var BaseView = require("./base_view");

module.exports = BaseView.extend({
    className: "user_index_view",
    events: {
        // "click .ZEEGA-tab":"openCoffin"
    },
    // openCoffin: function( e ) {
    //     $(".action").addClass("nav-open");
    //     $(".scroller").fadeIn();
    // },
});
module.exports.id = "UserIndexView";
