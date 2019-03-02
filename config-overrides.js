const {
  override,
  addBabelPlugins,
  addWebpackAlias,
} = require('customize-cra');

module.exports = override(
  ...addBabelPlugins(
    'react-hot-loader/babel',
  ),
  addWebpackAlias({
    'react-dom': '@hot-loader/react-dom',
    components: './src/components',
  })
);
