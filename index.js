module.exports = function(API) {
  return API.configureWebpack(function() {
    {
      module: {
        rules: [
          {
            test: /\.(styl|sss|stylus)$/,
            loader: 'postcss-loader?parser=sugarss'
          }
        ]
      }
    }
  });
};
