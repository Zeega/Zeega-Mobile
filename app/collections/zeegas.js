var Zeega = require('../models/zeega'),
    Base = require('./base');

module.exports = Base.extend({
  model: Zeega,
  limit: 5,
  url: function() {
    
    if(!_.isNumber(this.params.page)){
      this.params.page = 1;
    }

    url = '/api/projects/search?limit=' + this.limit + '&sort=date-desc&';
    if ( !this.params.tags ) {
        _.each( this.options.params, function( value, key ) {
            if ( value !== "" && value !== null ) {
                url += key + "=" + ( _.isFunction( value ) ? value() : value ) + "&";
            }
        });
    }

    // this is absurd!

    if( this.params && this.params.tags ){
      if( this.params.tags == "homepage" ){

        this.meta.headline = "Recent Zeegas";
      } else {
        this.meta.headline = "#" + this.params.tags;
      }

    } else if( this.options && this.options.params && this.options.params.tags){
      if( this.options.params.tags == "homepage" ){

        this.meta.headline = "Recent Zeegas";
      } else {
        this.meta.headline = "#" + this.params.options.tags;
      }
    } else {
      this.meta.headline = "Recent Zeegas";
    }


    return url;
    
  },

  comparator: function( zeega ){
    return - zeega.get("views");
  },
  parse: function( response ){
    this.meta.authenticated = response.request.user.authenticated;

    if( response.projects.length == 5){
      this.meta.more = true;
    } else {
      this.meta.more = false;
    }

    return response.projects;
  }
});
module.exports.id = 'Zeegas';
