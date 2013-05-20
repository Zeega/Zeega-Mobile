var BaseView = require("./base_view");

module.exports = BaseView.extend({
    className: "home_index_view",
    postRender: function() {
        console.log(this);
        if( this.app.router.currentFragment == "project/new" ){
            $(".message-overlay").show();
        }
    }
});
module.exports.id = "HomeIndexView";
