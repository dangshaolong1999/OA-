const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false, //是否保存并自动格式化
	productionSourceMap: false, //生产环境
	publicPath: './', //根目录
	outputDir: 'dist', //输出文件地址
	assetsDir: 'static', //静态资源文件放置
	devServer: {
		port: 8089, //端口号
		https: false, //是否启动https加密
		host: '0.0.0.0', //域名
		open: false, //是否打开一个浏览器
		//配置代理
		proxy: {
			'/api': {
				changeOrigin: true,
				secure: false,
				target: 'http://101.132.181.9/api/',
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
	// 第三方插件的对象形式配置
	// configureWebpack: {
	// 	// 返回一个将要合并的对象
	// 	resolve: {
	// 		alias: {
	// 			'@': resolve('src'),
	// 			vue$: 'vue/dist/vue.esm.js'
	// 		}
	// 	}
	// }
	// 函数写法
	// configureWebpack: () => {
	// 	return {
	// 		resolve: {
	// 			alias: {
	// 				'@': resolve('src'),
	// 				vue$: 'vue/dist/vue.esm.js'
	// 			}
	// 		}
	// 	}
	// }
})
