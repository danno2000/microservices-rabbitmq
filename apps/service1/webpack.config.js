const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join, resolve } = require('path');

module.exports = {
  resolve: {
    alias: {
      '@massive/rabbitmq': resolve(__dirname, '../../libs/rabbitmq/src'),
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
