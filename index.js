module.exports = function(API) {
  return API.configureWebpack(function() {
    return {
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
