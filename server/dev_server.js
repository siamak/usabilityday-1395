/* eslint-disable no-console, import/no-extraneous-dependencies */
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import open from 'open';
import DashboardPlugin from 'webpack-dashboard/plugin';
import prerender from 'prerender-node';

import renderDocument from './lib/render_document';
import webpackConfig from './webpack.dev.config';

const app = express();
const compiler = webpack(webpackConfig);

compiler.apply(new DashboardPlugin());

app.use(prerender);
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
	const html = renderDocument({
		bundle: `${webpackConfig.output.publicPath}bundle.js`,
	});

	res.send(html);
});

const port = process.env.PORT || 3000;

app.listen(port, 'localhost', (error) => {
	if (error) return console.error(error);
	open(`http://localhost:${port}`);
	return console.log(`Dev server listening at http://localhost:${port}`);
});
