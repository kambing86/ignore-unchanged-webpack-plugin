<!-- [![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![test][test]][test-url]
[![coverage][cover]][cover-url]
[![chat][chat]][chat-url] -->

<div align="center">
  <!-- replace with accurate logo e.g from https://worldvectorlogo.com/ -->
  <img width="200" height="200" src="https://cdn.worldvectorlogo.com/logos/javascript.svg">
  <a href="https://webpack.js.org/">
    <img width="200" height="200" vspace="" hspace="25" src="https://cdn.rawgit.com/webpack/media/e7485eb2/logo/icon-square-big.svg">
  </a>
  <h1>ignore-unchanged-webpack-plugin</h1>
  <p>A Webpack plugin to not emitting unchanged files to the output path</p>
</div>

<h2 align="center">Install</h2>

```bash
npm install --save-dev ignore-unchanged-webpack-plugin
```

<h2 align="center">Usage</h2>

### To build the bundle without overwriting the unchanged files

Overwriting the unchanged files will change the file modification time and can break caching mechanisms

<h2 align="center">Examples</h2>

**webpack.config.js**

```js
const IgnoreUnchangedFilesPlugin = require("ignore-unchanged-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new IgnoreUnchangedFilesPlugin(),
  ]
}
```

<h2 align="center">Maintainers</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/kambing86">
          <img width="150" height="150" src="https://avatars3.githubusercontent.com/u/1342133?s=460&v=4">
          </br>
          Chua Kang Ming
        </a>
      </td>
    </tr>
  <tbody>
</table>

<!-- [npm]: https://img.shields.io/npm/v/ignore-unchanged-webpack-plugin.svg
[npm-url]: https://npmjs.com/package/ignore-unchanged-webpack-plugin

[deps]: https://david-dm.org/webpack-contrib/ignore-unchanged-webpack-plugin.svg
[deps-url]: https://david-dm.org/webpack-contrib/ignore-unchanged-webpack-plugin

[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack

[test]: http://img.shields.io/travis/webpack-contrib/ignore-unchanged-webpack-plugin.svg
[test-url]: https://travis-ci.org/webpack-contrib/ignore-unchanged-webpack-plugin

[cover]: https://codecov.io/gh/webpack-contrib/ignore-unchanged-webpack-plugin/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/ignore-unchanged-webpack-plugin -->
