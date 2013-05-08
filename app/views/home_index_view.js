var BaseView = require("./base_view");

module.exports = BaseView.extend({
    className: "home_index_view",
    events:{
        "click .close": "goHome"
    },
    goHome: function(){
        this.app.router.navigate("/", {trigger: false});
        this.$(".message-overlay").hide();
    },
    postRender: function() {
        if( this.app.router.currentFragment == "project/new" ){
            this.$(".message-overlay").show();
        }
    }
});
module.exports.id = "HomeIndexView";
