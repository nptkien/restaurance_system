module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['../models'],
        alias: {
          '@components': '../models/',
          'react-native': './node_modules/react-native',
          react: './node_modules/react',
        },
      },
    ],
  ],
};
