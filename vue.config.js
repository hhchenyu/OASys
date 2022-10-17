const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave:false,
    configureWebpack:{
      resolve:{
          alias: {
              'assets':'@/assets',
              'components':'@/components',
              'network':'@/network',
              'router':'@/router',
              'views':'@/views',
              'common':'@/common',
              'store':'@store'
          }
      }
  }
})
