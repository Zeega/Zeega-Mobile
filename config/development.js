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
    host: "dev.zeega.com/jmongo/web",
    protocol: "http"
  },

  rendrApp: {
    someProperty: 'someValue'
  }
};
