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
