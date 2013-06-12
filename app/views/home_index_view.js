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
            };
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

        var onScroll = $.proxy( function(e){ this.onScroll(e); }, this );
        $(window).scroll( onScroll );

    },
    onScroll: function(e){

          var a = $(window).scrollTop() + $(window).innerHeight();
          var b = $("body")[0].scrollHeight;
          
          if( a > b - 500  && this.collection ){
            if( this.collection.meta.more && this.collection.length < 20 ){
              this.collection.meta.more = false;
              this.collection.on("sync", function(collection, response){
                $(".loading").hide();
                this.render();
              }, this );
              this.$(".zeegas-wrapper").append("<div class='zeega-card'><article class='loading'></article> </div>");
              this.loadMore();
            } else {
              $(".footer").show();
            }
          }
    }
});
module.exports.id = "HomeIndexView";
