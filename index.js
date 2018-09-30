const sugarss = require('sugarss');

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        parser: sugarss
      }
    }
  }
};
