var Zeega = require('../models/zeega'),
    Base = require('./base');

module.exports = Base.extend({
  model: Zeega,
  url: function() {
      
    if ( this.params.user == -1 ) {
        url = '/api/projects/search?limit=5&sort=date-desc&tags=homepage';

    } else {
        url = '/api/projects/search?limit=5&sort=date-desc';
    }


    return url;
    
  },

  comparator: function( zeega ){
    return 1000000 - zeega.get("views");
  },
  parse: function( response ){
    this.meta.authenticated = response.request.user.authenticated;
    return response.projects;
  }
});
module.exports.id = 'Zeegas';
