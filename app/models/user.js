var Base = require('./base'),
     Zeegas = require('../collections/zeegas');

module.exports = Base.extend({
  url: '/api/users/:id/projects',
  parse: function( results ){
    var zeegas = new Zeegas( results.projects );
    //this.set("zeegas", zeegas);
    //this.zeegas = zeegas;
    return results;
  },
  idAttribute: 'id'
});
module.exports.id = 'User';
