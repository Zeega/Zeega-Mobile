module.exports = {
  index: function(params, callback) {
    var spec = {
      collection: {collection: "Zeegas", params: _.extend(params,{ "user": -1 })}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, "home_index_view", result);
    });
  },

  show: function(params, callback) {
    var spec = {
      model: {model: "Zeega", params: params, ensureKeys: []}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, "home_show_view", result);
    });
  }
};
