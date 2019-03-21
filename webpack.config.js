const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
	entry: './src/index.js',

	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'build'),
	},

	module: {
		rules: [
			{
				test: /node_modules\/unicode-properties.*\.json$/,
				loader: 'json',
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [ '@babel/preset-env', '@babel/preset-react' ],
					plugins: [
						'@babel/plugin-proposal-class-properties',
					],
				},
			},
			{
				test: /\.css$/,
				loader: 'style-loader',
			}, {
				test: /\.css$/,
				loader: 'css-loader',
				query: {
					modules: true,
					localIdentName: '[name]__[local]___[hash:base64:5]',
					camelCase: true,
				},
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
				],
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: true,
							camelCase: true,
							localIdentName: '[local]___[hash:base64:5]',
						},
					},
					{
						loader: 'less-loader',
					},
				],
			},
		],
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.less', '.css' ],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body',
			filename: './timeline-build.html',
			inlineSource: 'bundle.js',
		 }),
		 new HtmlWebpackInlineSourcePlugin(),
	]
};
