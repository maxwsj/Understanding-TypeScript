const path = require('path');

module.exports = {
   mode: 'development',
   entry: './src/app.ts',
   plugins: [new Dotenv()],
   devServer: {
      static: [
         {
            directory: path.join(__dirname),
         },
      ],
   },
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/',
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
      ],
   },
   resolve: {
      fallback: {
         os: require.resolve('os-browserify/browser'),
         crypto: require.resolve('crypto-browserify'),
      },
      extensions: ['.ts', '.js'],
   },
};
