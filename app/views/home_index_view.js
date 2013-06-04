var BaseView = require("./base_view");

module.exports = BaseView.extend({
    className: "home_index_view",
    postRender: function() {
        if( this.app.router.currentFragment == "project/new" ){
            $(".message-overlay").show();
            $(".join").hide();
        }

        if( !this.collection.meta.authenticated ){
            $(".join").hide();
        }
    }
});
module.exports.id = "HomeIndexView";
