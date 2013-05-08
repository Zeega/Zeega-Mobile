var Zeega = require('../models/zeega'),
    Base = require('./base');

module.exports = Base.extend({
  model: Zeega,
  url: function() {
        
    if (this.params.user == "undefined") {
        return '/api/items/search?type=project&limit=20&fields=id,title,display_name,user_id,user_thumbnail,thumbnail_url&sort=date-desc';

    } else {
        return '/api/items/search?user=:user&type=project&limit=20&fields=id,title,display_name,user_id,user_thumbnail,thumbnail_url&sort=date-desc';
    }
    
  },
  parse: function( response ){
    return response.items;
  }
});
module.exports.id = 'Zeegas';
