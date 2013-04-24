module.exports = {
  index: function(params, callback) {
    var spec = {
      collection: {collection: "Zeegas", params: params}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, "zeegas_index_view", result);
    });
  },

  show: function(params, callback) {
    var spec = {
      model: {model: "Zeega", params: params, ensureKeys: []}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, "zeegas_show_view", result);
    });
  }
};
