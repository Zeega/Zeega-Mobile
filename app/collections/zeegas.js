var Zeega = require('../models/zeega'),
    Base = require('./base');

module.exports = Base.extend({
  model: Zeega,
  url: function() {
    

    if ( this.params.tags ) {
        url = '/api/projects/search?limit=3&sort=date-desc';
    } else {
        url = '/api/projects/search?limit=3&sort=date-desc&'
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
    return response.projects;
  }
});
module.exports.id = 'Zeegas';
