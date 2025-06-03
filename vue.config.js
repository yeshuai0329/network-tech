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
      title: '梦腾科技内部业务系统',
    },
    pubs: {
      entry: 'src/pubs/main.js',
      template: 'public/pubs.html',
      filename: 'pubs.html',
      title: '梦腾科技公开业务系统',
    }
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
