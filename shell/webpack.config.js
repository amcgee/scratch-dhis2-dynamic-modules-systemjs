const webpack = require('webpack')
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv = {}) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "dhis2-apps",
    projectName: "shell",
    webpackConfigEnv,
  });

  const config = merge(defaultConfig, {
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    externals: [...defaultConfig.externals, '@dhis2/app-runtime', '@dhis2/ui', '@dhis2/d2-i18n'],
    devServer: {
        port: 8083
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.REACT_APP_DHIS2_BASE_URL': JSON.stringify('https://debug.dhis2.org/dev')
      })
    ]
  });

  const vendorConfig = {
    mode: config.mode,
    entry: {
      'dhis2-app-runtime': '@dhis2/app-runtime',
      'dhis2-i18n': '@dhis2/d2-i18n'
    },
    output: {
      filename: 'vendor.[name].js',
      libraryTarget: 'system',
      path: '/Users/austin/dev/scratch/dynamic-modules/shell/dist',
      uniqueName: 'vendor',
      devtoolNamespace: 'vendor',
      publicPath: ''
    },
    module: {  },
    devtool: 'source-map',
    devServer: {
      compress: true,
      historyApiFallback: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      firewall: false,
      client: { host: 'localhost' },
      port: 8082
    },
    externals: ['react', 'react-dom'],
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ],
    resolve: { extensions: [ '.mjs', '.js', '.jsx', '.wasm', '.json' ] }
  }

  const uiConfig = {
    mode: config.mode,
    entry: {
      'dhis2-ui': '@dhis2/ui'
    },
    output: {
      filename: 'vendor.[name].js',
      libraryTarget: 'system',
      path: '/Users/austin/dev/scratch/dynamic-modules/shell/dist',
      uniqueName: 'vendor-ui',
      devtoolNamespace: 'vendor-ui',
      publicPath: ''
    },
    module: {  },
    devtool: 'source-map',
    devServer: {
      compress: true,
      historyApiFallback: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      firewall: false,
      client: { host: 'localhost' },
      port: 8080
    },
    externals: ['react', 'react-dom', '@dhis2/app-runtime', '@dhis2/d2-i18n'],
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ],
    resolve: { extensions: [ '.mjs', '.js', '.jsx', '.wasm', '.json' ] }
  }

  return [config, vendorConfig, uiConfig];
};