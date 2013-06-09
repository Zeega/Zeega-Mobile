var BaseView = require("./base_view");

module.exports = BaseView.extend({
    className: "user_index_view",
    events: {
        "click .more" : "loadMore"
    },
    loadMore: function(){

        if( !this.collection.options.params ){
            this.collection.options.params ={
                page: this.collection.options.page,
                user: this.collection.options.user
            }
        }
        this.collection.options.params.page++;

        this.collection.fetch({remove: false});
    },
});
module.exports.id = "UserIndexView";
