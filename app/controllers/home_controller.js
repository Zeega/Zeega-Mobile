module.exports = {
  index: function(params, callback) {
    var spec = {
      collection: {collection: "Zeegas", params: _.extend(params,{ "user": -1 })}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, "home_index_view", result);
    });
  },

  tags: function(params, callback) {
    var spec = {
       collection: {collection: "Zeegas", params: _.extend(params,{ "user": -1 })}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, "home_index_view", _.extend({},result, {"yoink":"furball"})) ;
    });
  },

  edit: function(params, callback) {
    var spec = {
       collection: {collection: "Zeegas", params: _.extend(params,{ "user": -1, "tag": "homepage" })}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, "home_index_view", _.extend({},result, {"editable":"cat"})) ;
    });
  }

};
