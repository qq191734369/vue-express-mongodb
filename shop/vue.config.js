const path = require('path'); //引入path模块
const CompressionPlugin = require('compression-webpack-plugin'); // gzip
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve(dir){
    return path.join(__dirname,dir) //path.join(__dirname)设置绝对路径
}

module.exports = {
  lintOnSave: false,

  pages: {
    main: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      // title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'main']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  },

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
      scss: {
        // 这里的选项会传递给 scss-loader
        additionalData: `@import "~@/assets/style/share.scss";`
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    }
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css$/,
            threshold: 10 * 1024,
            deleteOriginalAssets: false
          }),
          new BundleAnalyzerPlugin()
        ]
      }
    } else {
      // 为开发环境修改配置...
      return {
        plugins:[
            new BundleAnalyzerPlugin()
        ]
      }
    }
  },
  chainWebpack: (config) => {
    // alias
    config.resolve.alias
    .set('@', resolve('./src'))
    .set('components', resolve('./src/components'))
    .set('page', resolve('./src/page'))
    .set('util', resolve('./src/util'))
    .set('service', resolve('./src/service'))
    //output
    // config.output
    // .filename('[name].[hash:5].js')
    // .chunkFilename('[name].[hash:5].js')

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
    // url-loader 设置图片大小限制
    config.module
      .rule('images')
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 4 * 1024 }))
          .end()    
    // 删除元素间空格
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.whitespace = 'condense'
        return options
      })
      .end()
    
    // 代码拆分
    config.optimization
      .splitChunks({
        cacheGroups: {
          // vue: {
          //   name: 'vue',
          //   test: /[\\/]node_modules[\\/]vue[\\/]/,
          //   priority: 0
          // },
          // vuex: {
          //   name: 'vuex',
          //   test: /[\\/]node_modules[\\/]vuex[\\/]/,
          //   priority: 0
          // },
          vendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial'
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'initial',
            reuseExistingChunk: true
          }
        }
      })
  },

  devServer: {
    hot: true,
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