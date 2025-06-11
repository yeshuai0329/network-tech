const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  pages: {
    bms: {
      entry: 'src/bms/main.js',
      template: 'public/bms.html',
      filename: 'bms.html',
      chunks: ['chunk-vendors', 'chunk-common', 'bms']
    },
    pubs: {
      entry: 'src/pubs/main.js',
      template: 'public/pubs.html',
      filename: 'pubs.html',
      chunks: ['chunk-vendors', 'chunk-common', 'pubs']
    }
  },
  chainWebpack: config => {
    // 为不同入口配置基础路由
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // 为不同入口配置不同的基础路径
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-avatar': 'src',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        }
        return options
      })
  }
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://47.97.8.40:9000', // 后端API服务器地址
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '' // 路径重写
  //       }
  //     }
  //   }
  // }
})
