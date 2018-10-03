module.exports = function(API) {
  return API.configureWebpack(function() {
    return {
      module: {
        rules: [
          {
            test: /\.(sss|sass|scss)$/,
            loader: 'sass-loader'
          },
          {
            test: /\.(sss|stylus|styl)$/,
            loader: 'stylus-loader'
          },
          {
            test: /\.(styl|sss|stylus|sass)$/,
            loader: 'postcss-loader?parser=sugarss'
          }
        ]
      }
    }
  });
};
