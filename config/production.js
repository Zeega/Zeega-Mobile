// Config settings for NODE_ENV=production

exports.config = {
  assets: {
    minify: true,
    cdn: {
      protocol: 'https',
      cnames: ['localhost'],
      pathPrefix: ''
    }
  },

  api: {
    host: "zeega.com",
    protocol: "http"
  },

  rendrApp: {
    someProperty: 'someValue'
  }
};
