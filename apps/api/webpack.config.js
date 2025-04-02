const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

// NX provides this tsconfig paths to webpack aliases but doesn't
// appear to be working in the latest Nrwl NX release, so needing
// to rely on tsconfig-paths-webpack-plugin until that's been sorted.
// const { NxTsconfigPathsWebpackPlugin } = require('@nx/webpack/tsconfig-paths-plugin');

module.exports = {
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: join(__dirname, './tsconfig.app.json'),
      })
    ]
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
    })
  ],
};
