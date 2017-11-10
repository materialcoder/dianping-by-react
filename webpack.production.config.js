var pkg = require("./package.json");
var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		app: path.resolve(__dirname + "/app/index.js"),
		vendor: Object.keys(pkg.dependencies)
	},
	output: {
		path: __dirname + "/build",
		filename: "js/[name].[chunkhash:8].js"
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
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader", "postcss-loader", "less-loader"]
				}),
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader", "postcss-loader"]
				}),
				exclude: /node_modules/
			},
			{
				test: /\.(png|gif|jpg|jpeg|bmp)$/i,
				use: {
					loader: "url-loader",
					options: {
						limit: 5000,
						name: "img/[name].[chunkhash:8].[ext]"
					}
				}
			},
			{
				test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
				use: {
					loader: "url-loader",
					options: {
						limit: 5000,
						name: "fonts/[name].[chunkhash:8]"
					}
				}
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin("Copyright by materialcoder.github"),
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.tmpl.html"
		}),
		//定义生产环境，编译 React 时压缩到最小
		new webpack.DefinePlugin({
			'process.env': {
				"NODE_ENV": JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		//分离css 和js 
		new ExtractTextPlugin("css/[name].[chunkhash:8].css"),
		// 提取公共代码
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'js/[name].[chunkhash:8].js'
		}),
		new webpack.DefinePlugin({
			__DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || false ))
		})
	]
}