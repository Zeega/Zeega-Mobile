module.exports = {
  index: function(params, callback) {
    var spec = {
      model: {model: "User", params: params}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, "user_index_view", result);
    });
  }
};
