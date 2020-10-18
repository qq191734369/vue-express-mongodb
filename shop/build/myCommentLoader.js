const { getOptions } = require('loader-utils');
/**
 * 用法: 通过env设置需要应用loader的环境，
 * 该loader会删除特殊注释中的全部内容
*/
// 注释用法如下
/** remove **/  /** removeend **/
module.exports = function(source){ // 文件内容
    let result = source
    const loaderOptions = getOptions(this) || {}; // 拿到配置信息的方法,webpack.config.js对应loader，option配置信息
    const env = loaderOptions.env;
    if (env && env.length > 0 && env.includes(process.env.NODE_ENV)) {
      result = result.replace(/\/\*\* remove \*\*\/[^remove|removeend]*\/\*\* removeend \*\*\//, (match) => {
        console.log(match)
        return ''
      });
    }
    return result //必须要有返回
}