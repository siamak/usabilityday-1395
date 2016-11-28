/* eslint-disable prefer-template, object-shorthand, func-names,
  import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const mqpacker = require('css-mqpacker');


const svgoConfig = JSON.stringify({
	plugins: [
		{ removeTitle: true },
		{
			convertColors: {
				shorthex: false,
			},
		},
		{ convertPathData: false },
	],
});
module.exports = {
	devtool: 'eval-source-map',
	entry: {
		bundle: [
			'webpack-hot-middleware/client?path=/__webpack_hmr',
			'./client/index.js',
		],
	},
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: '[name].js',
		publicPath: '/',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],

	module: {
		loaders: [
			{
				test: /\.js?$/,
				loaders: ['react-hot', 'babel'],
				exclude: /node_modules/,
			},
			{
				test: /\.scss?$/,
				loaders: [
					'style?sourceMap',
					'css?modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]',
					'resolve-url',
					'postcss',
					'sass',
				],
			},
			{
				include: path.resolve(__dirname, '../client/assets/'),
				test: /\.(png|jpg|gif|ico|woff|woff2|svg|json|pdf|zip)$/,
				loaders: [
					'file?name=[path][name].[ext]',
					// 'inline',
				],
			},
			{
				include: path.resolve(__dirname, '../client/components/container/icons/'),
				test: /\.svg$/,
				loaders: [
					'file-loader',
					'svgo-loader?' + svgoConfig,
				],
				// loaders: ['svg-sprite?' + JSON.stringify({
				// 	name: '[name]_[hash]',
				// 	prefixize: true,
				// })],
			},
		],
	},
	postcss: [
		mqpacker(),
		autoprefixer({ browsers: ['last 5 versions'] }),
		cssnano({
			discardComments: {
				removeAll: true,
			},
			discardEmpty: true,
			discardOverridden: true,
			filterOptimiser: true,
			mergeLonghand: true,
			mergeRules: true,
			svgo: true,
		}),
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
};
