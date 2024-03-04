const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    transformer: {
        getTransformOptions: async () => ({
          transform: {
            experimentalImportSupport: false,
            inlineRequires: true,
          },
        }),
      },
      resolver: {
        sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx'],
      },
      watchFolders: [
        path.resolve(__dirname, '../client/node_modules'),
        path.resolve(__dirname, '../models'),
        path.resolve(__dirname, '..'),
      ],
      projectRoot: path.resolve(__dirname),
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
