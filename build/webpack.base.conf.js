var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var webpackConfig = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js?t=[hash:7]',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      'components': resolve('./src/components'),
      'utils': resolve('./src/utils'),
      'service': resolve('./src/service'),
      'jquery': path.resolve(__dirname, '../node_modules/jquery/src/jquery'),
      'swiper': 'swiper/dist/js/swiper.js', // 解决打包时报错：Unexpected token: name (Dom7) [./node_modules/dom7/dist/dom7.modular.js:16,0] （引入swiper4的原因）
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/vue-baidu-map')] // resolve('node_modules/vue-baidu-map')解决报错：ERROR in static/js/linkUs.8df365ac7036339650c7.js from UglifyJs Unexpected token: operator (>) [./~/vue-baidu-map/components/base/bindEvent.js:6,0] （原因：babel没有把node_modules/vue-baidu-map目录下的js文件转换成es5语法）
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}

var vuxLoader = require('vux-loader')
var vuxConfig = require('./vux-config')
module.exports = vuxLoader.merge(webpackConfig, vuxConfig)
