var BaseView = require("./base_view");

module.exports = BaseView.extend({
  className: "zeegas_view",
    loadMore: function(){
        if( !this.collection.options.params ){
            this.collection.options.params ={
                page: this.collection.options.page,
                user: this.collection.options.user
            };
        }
        if(!_.isNumber(this.collection.options.params.page)){
          this.collection.options.params.page = 2;
        } else{
          this.collection.options.params.page++;
        }
        

        this.collection.fetch({remove: false});
    },
    onScroll: function(e){

          var a = $(window).scrollTop() + $(window).innerHeight();
          var b = $("body")[0].scrollHeight;
          
          if( a > b - 500  && this.collection && this.collection.meta.more ){
            this.collection.meta.more = false;
            this.collection.on("sync", function(collection, response){
              $(".loading-card").hide();
              this.render();
            }, this );
            this.$(".zeegas-wrapper").append("<div class='zeega-card loading-card'><article class='loading'></article> </div>");
            this.loadMore();
          }
    },
    postRender: function() {

        var onScroll = $.proxy( function(e){ this.onScroll(e); }, this );
        $(window).scroll( onScroll );

    }
});
module.exports.id = "ZeegasView";
