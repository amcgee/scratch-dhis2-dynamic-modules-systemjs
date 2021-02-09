const webpack = require('webpack')
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv = {}) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "dhis2-apps",
    projectName: "example",
    webpackConfigEnv,
  });

  const config = merge(defaultConfig, {
    externals: ['@dhis2/app-runtime', 'react', 'react-dom', '@dhis2/ui'],
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ],
    devServer: {
      port: 8081
    },
  });

  return config;
};