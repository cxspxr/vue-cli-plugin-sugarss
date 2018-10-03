# vue-cli-plugin-sugarss

[SugarSS](https://github.com/postcss/sugarss) support for the projects created with [@vue/cli](https://github.com/vuejs/vue-cli). Lints [SASS](https://github.com/sass/sass) and [Stylus](https://github.com/stylus/stylus).

## Installation

According to [this](https://cli.vuejs.org/guide/plugins-and-presets.html#installing-plugins-in-an-existing-project) you are able to install community plugins as follows:

```shell
vue add sugarss
```

## Usage

You can just go with `lang=sass`, `lang=stylus` and `lang=sss` as it is shown below. Make sure that you have your `sass-loader` / `stylus-loader` installed.

```html
<style lang="sass">

body
  color: black

</style>
```

```html
<style lang="stylus">

body
  color: white

</style>
```

```html
<style lang="sss">

body
  color: red

</style>
```
