const path = require('path'); //引入path模块

function resolve(dir){
    return path.join(__dirname,dir) //path.join(__dirname)设置绝对路径
}

module.exports = {
  lintOnSave: false,

  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',

  outputDir: 'dist',

  assetsDir: '',

  indexPath: 'index.html',

  filenameHashing: process.env.NODE_ENV === 'production' ? true : false,

  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    }
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: (config) => {
    // alias
    config.resolve.alias
    .set('@',resolve('./src'))
    .set('components',resolve('./src/components'))
    .set('page', resolve('./src/page'))
    .set('util', resolve('./src/util'))
    .set('service', resolve('./src/service'))
    //output
    // config.output
    // .filename('[name].[hash:5].js')
    // .chunkFilename('[name].[hash:5].js')

    //plugin
    // 自定义删除某段代码的loader
    config.module.rule('myComment')
    .test(/\.(js|vue)$/)
    .use('myCommnet-loader')
    .loader(resolve('./build/myCommentLoader.js'))
    .options({
      env: ['development', 'production'] // 开发环境和production生效
    })
    .end()

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('./src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('./src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
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