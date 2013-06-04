var Zeega = require('../models/zeega'),
    Base = require('./base');

module.exports = Base.extend({
  model: Zeega,
  url: function() {
      
    if ( this.params.user == -1 ) {
        url = '/api/items/search?type=project&limit=10&fields=id,title,display_name,user_id,views,user_thumbnail,thumbnail_url&sort=date-desc&tags=homepage';

    } else {
        url = '/api/items/search?user=:user&type=project&limit=10&fields=id,title,views,display_name,user_id,user_thumbnail,thumbnail_url&sort=date-desc';
    }


    return url;
    
  },

  comparator: function( zeega ){
    return 1000000 - zeega.get("views");
  },
  parse: function( response ){

    _.each(response.items, function(item){
      item.hasOneView = ( item.views == 1 );
    });

    return response.items;
  }
});
module.exports.id = 'Zeegas';
