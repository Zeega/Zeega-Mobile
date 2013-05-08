var Base = require('./base'),
     Zeegas = require('../collections/zeegas');

module.exports = Base.extend({
  url: '/api/users/:id',
  idAttribute: 'id'
});
module.exports.id = 'User';
