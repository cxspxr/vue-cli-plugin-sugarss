module.exports = function(API) {
  return API.configureWebpack(function() {
    return {
      module: {
        rules: [
          {
            test: /\.(styl|sss|stylus|sass)$/,    
            loader: 'postcss-loader?parser=sugarss'
          }
        ]
      }
    }
  });
};
