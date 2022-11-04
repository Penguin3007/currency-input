module.exports = {
  entry: './src/currencyInput.ts',
  devtool: 'inline-source-map',
  output: {
    filename: 'currencyInput.min.js',
    library: {
      type: 'module'
    }
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
