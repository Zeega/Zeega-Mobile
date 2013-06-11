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
