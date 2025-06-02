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
      title: 'Vue Multi-Page Demo - Page 1',
    }
    // pubs: {
    //   entry: 'src/pubs/main.js',
    //   template: 'public/pubs.html',
    //   filename: 'pubs.html',
    //   title: 'Vue Multi-Page Demo - Page 2',
    // }
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
