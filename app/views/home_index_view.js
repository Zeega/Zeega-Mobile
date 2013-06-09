var BaseView = require("./base_view");

module.exports = BaseView.extend({
    className: "home_index_view",
    events: {
        "click .more" : "loadMore"
    },
    loadMore: function(){

        if( !this.collection.options.params ){
            this.collection.options.params ={
                page: this.collection.options.page,
                user: this.collection.options.user,
                tags: this.collection.options.tags
            }
        }
        this.collection.options.params.page++;

        this.collection.fetch({remove: false});
    },
    postRender: function() {

        this.collection.on("sync", function(e){
            this.render();
        }, this );

        if( this.app.router.currentFragment == "project/new" ){
            $(".message-overlay").show();
            $(".join").hide();
        }

        if( this.collection.meta.authenticated ){
            $(".join").hide();
        }
    }
});
module.exports.id = "HomeIndexView";
