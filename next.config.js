const withTM = require('next-plugin-transpile-modules');
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withTypescript(
    withTM({
      transpileModules: ['react-native-web'],
      webpack: config => {
        // Alias all `react-native` imports to `react-native-web`
        config.resolve.alias = {
          'react-native$': 'react-native-web',
        };
        return config;
      },
    }),
  ),
);
