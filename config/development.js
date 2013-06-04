// Config settings for NODE_ENV=development

exports.config = {
  assets: {
    minify: false,
    cdn: {
      protocol: 'http',
      cnames: ['localhost'],
      pathPrefix: ''
    }
  },

  api: {
    host: "mongoweb.zeega.com",
    protocol: "http"
  },

  rendrApp: {
    someProperty: 'someValue'
  }
};
