module.exports = {
  entry: './src/currencyInput.ts',
  output: {
    filename: 'currencyInput.min.js',
    libraryTarget: 'module'
  },
  experiments: {
    outputModule: true
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
