/* eslint-disable prefer-template, object-shorthand, func-names,
  import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const mqpacker = require('css-mqpacker');

const isomorphicProdConfig = require('./isomorphic.prod.config');

const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(isomorphicProdConfig);

module.exports = {
	devtool: 'source-map',
	entry: {
		bundle: ['./client/index.js'],
	},
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: '[hash].js',
		libraryTarget: 'umd',
		publicPath: '/',
	},
	plugins: [
		new webpack.BannerPlugin(`
			***********************************************************************
			*       Licensed: UXPA "Usabilityday2016" <www.usabilityday.ir>       *
			*     Creator: Siamak Mokhtari <www.siamak.us> · <hi@siamak.work>     *
			*                       Copyright (C) 2016-2017.                      *
			***********************************************************************
		`),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
		new webpack.optimize.UglifyJsPlugin({
			screw_ie8: true,
			compressor: {
				warnings: false,
			},
		}),
		new ExtractTextPlugin('[contenthash].css', {
			allChunks: true,
		}),
		webpackIsomorphicToolsPlugin,
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				exclude: /node_modules/,
			}, {
				test: webpackIsomorphicToolsPlugin.regular_expression('css'),
				loader: ExtractTextPlugin.extract(
					'style', [
						'css?minimize&modules&importLoaders=1&localIdentName=_[hash:base64:5]',
						'resolve-url',
						'postcss',
						'sass',
					]
				),
			}, {
				test: webpackIsomorphicToolsPlugin.regular_expression('images'),
				loaders: [
					'file?name=img/[sha512:hash:base64:7].[ext]',
					'image-webpack?optimizationLevel=7&progressive=true',
				],
			}, {
				test: webpackIsomorphicToolsPlugin.regular_expression('fonts'),
				loaders: [
					'file?name=fonts/[sha512:hash:base64:7].[ext]',
				],
			}, {
				test: webpackIsomorphicToolsPlugin.regular_expression('file'),
				loaders: [
					'file?name=file/[sha512:hash:base64:4].[ext]',
				],
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
};
