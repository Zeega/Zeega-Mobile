var Zeega = require('../models/zeega'),
    Base = require('./base');

module.exports = Base.extend({
  model: Zeega,
  url: function() {
    return '/api/items/search?type=project&limit=10';
  },
  parse: function( response ){
    return response.items;
  }
});
module.exports.id = 'Zeegas';
