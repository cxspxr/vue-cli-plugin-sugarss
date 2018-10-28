# vue-cli-plugin-sugarss

[SugarSS](https://github.com/postcss/sugarss) support for the projects created with [@vue/cli](https://github.com/vuejs/vue-cli). Lints [SASS](https://github.com/sass/sass) and [Stylus](https://github.com/stylus/stylus).

## Installation

According to [this](https://cli.vuejs.org/guide/plugins-and-presets.html#installing-plugins-in-an-existing-project) you are able to install community plugins as follows:

```shell
vue add sugarss
```

## Usage

You can just go with `file.sss` and/or `style[lang=sss]` as it is shown below.

```html
<style lang="sss">

body
  color: red

</style>
```

## PostCSS plugins

This plugin use it's custom webpack rule named `sss`. So in order to add some options (including plugins) to `postcss-loader` (or `vue-style-loader`, or `css-loader`) you need chain existing webpack rule in `vue.config.js` like this:

```bash
$ npm i -D <plugin>
$ npm i -D <another-plugin>
```

```javascript
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module.rule('sss')
      .use('postcss-loader')
        .loader('postcss-loader')
        .tap(opts => {
          opts.plugins.push(
            // in some order you want
            require('<plugin>'),
            require('<another plugin>')
          );

          // You can change or set any property
          // opts.parser = 'sugarss';

          return opts;
        });
  }
}
```

### `postcss-nested` & `postcss-nested-props`

You should `require('post-css-nested-props')` before `require('postcss-nested')` when pushing them to plugins.
