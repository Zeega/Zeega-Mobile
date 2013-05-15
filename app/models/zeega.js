var Base = require('./base');

module.exports = Base.extend({
    url: '/api/items/:id',
    idAttribute: 'id'
});
module.exports.id = 'Zeega';
