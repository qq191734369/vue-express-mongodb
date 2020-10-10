const path = require('path'); //引入path模块
function resolve(dir){
    return path.join(__dirname,dir) //path.join(__dirname)设置绝对路径
}

module.exports = {

  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
    .set('@',resolve('./src'))
    .set('components',resolve('./src/components'))
    .set('page', resolve('./src/page'))
    .set('util', resolve('./src/util'))
    .set('service', resolve('./src/service'))
  },

  devServer: {
    proxy: {
      '/api/v1/*': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { }
      },
      '/login': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { }
      },
      '/logout': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { }
      }
    }
  }
}