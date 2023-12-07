import { resolve } from 'path'
import * as webpack from 'webpack'

const webpackConfig: webpack.Configuration = {
  mode: 'production',
  resolve: {
    modules: [
      resolve('./node_modules')
    ],
    extensions: ['.ts', '.tsx']
  },
  context: resolve(__dirname, '../demo'),
  entry: './demo.tsx',
  output: {
    path: resolve(__dirname, '../docs/'),
    filename: 'demo.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules\/.*/,
        loader: 'swc-loader'
      }
    ]
  }
}

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    throw err
  } else {
    console.log(stats?.toString(webpackConfig.stats))
  }
})
