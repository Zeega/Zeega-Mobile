var Zeega = require('../models/zeega'),
    Base = require('./base');

module.exports = Base.extend({
  model: Zeega,
  url: function() {
      
    if ( _.isUndefined(this.params.tags) ) {
        url = '/api/projects/search?limit=5&sort=date-desc&tags=homepage';

    } else {
        url = '/api/items/search?user=:user&limit=10&sort=date-desc';
    }


    return url;
    
  },
  parse: function( response ){

    // _.each(response.projects, function(project){
    //   item.hasOneView = ( project.views == 1 );
    // });

    return response.projects;
  }
});
module.exports.id = 'Zeegas';
