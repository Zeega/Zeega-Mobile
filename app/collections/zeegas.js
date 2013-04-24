var Zeega = require('../models/zeega'),
    Base = require('./base');

module.exports = Base.extend({
  model: Zeega,
  url: function() {
    return '/api/items/search?type=project&limit=15&sort=date-desc';
  },
  parse: function( response ){

    //api returns unpublished Zeegas, need to fix that
    var items = [];
    _.each(response.items, function( item ){

        if( item.text.layers.length > 0 ){
            items.push( item );
        }

    });

    return items;
  }
});
module.exports.id = 'Zeegas';
