module.exports = function(API) {
  return API.configureWebpack(function() {
    return {
      module: {
        rules: [
          {
            test: /\.(sss)$/,
            loader: 'style-loader!css-loader!postcss-loader?parser=sugarss'
          }
        ]
      }
    }
  });
};
