module.exports = function(API) {
  return API.chainWebpack(config => {
    const sugarRule = config.module.rule('sss').test(/\.sss$/);

    ['vue-style-loader', 'css-loader'].forEach((loader) => {
      sugarRule.use(loader).loader(loader).tap(options => { return {}; });
    });

    sugarRule.use('postcss-loader').loader('postcss-loader').tap(options => {
      return {
        parser: 'sugarss',
        plugins: []
      }
    });
  });
};
