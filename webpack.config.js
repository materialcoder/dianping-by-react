var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname + "/app/index.js"),
	output: {
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use:  "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader", "postcss-loader"],
				exclude: /node_modules/
			},
			{
				test: /\.(png|gif|jpg|jpeg|bmp)$/i,
				use: {
					loader: "url-loader",
					options: {
						limit: 5000
					}
				}
			},
			{
				test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
				use: {
					loader: "url-loader",
					options: {
						limit: 5000
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.tmpl.html"
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			__DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || false ))
		})
	],
	devServer: {
		proxy: {
          // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
          // koa 代码在 ./mock 目录中，启动命令为 npm run mock
          '/get': {
            target: 'http://localhost:3000',
            secure: false
          },
          '/post': {
            target: 'http://localhost:3000',
            secure: false
          }
        },
		historyApiFallback: true,
		inline: true,
		hot: true
	}
}