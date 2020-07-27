// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: './static',
        assetsPublicPath: './', // 资源的根目录：通过http服务器运行的url路径。在大多数情况下，这个是根目录(/)
        productionSourceMap: false,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: true,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 8099,
        autoOpenBrowser: false,
        // 静态资源文件夹
        assetsSubDirectory: 'static',
        // 发布路径
        assetsPublicPath: '/',
        // 代理配置表，在这里可以配置特定的请求代理到对应的API接口
        // 例如将'localhost:8099/api/xxx'代理到'www.example.com/api/xxx'
        // 使用方法：https://vuejs-templates.github.io/webpack/proxy.html
        proxyTable: {
            '/api': { // '/api': 配置项 -- 这里理解成 /api 代替target的地址，调接口时直接用 /api 代替，比如调用'https://c.y.qq.com/user/add'，直接写 '/api/user/add'即可
                target: 'http://xxxxxx.com',//设置调用的接口域名（跨域地址）
                changeOrigin: true, // 是否跨域
                secure: false,  // 是否使用https
                pathRewrite: {  // 重写地址：如果接口本身没有/api这种通用前缀，需要通过pathRewrite来重写地址
                    '^/api': "",
                }
            }
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: true
    }
}
