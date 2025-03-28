const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join, resolve } = require('path');

module.exports = {
  resolve: {
    alias: {
      // todo: find that old plugin that dynamically
      // produces these aliases based on the TS references.
      '@massive/rabbitmq': resolve(__dirname, '../../libs/rabbitmq/src'),
      '@massive/server-stats': resolve(__dirname, '../../libs/server-stats/src'),
    },
  },
  output: {
    path: join(__dirname, 'dist'),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
    }),
  ],
};
