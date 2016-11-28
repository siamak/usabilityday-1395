import React from 'react';
import { Route, browserHistory, IndexRoute } from 'react-router';

import Layout from './components/layout/';
import Index from './components/container/app';
import Charter from './components/charter.js';
import NotFound from './components/not_found.js';

const routes = (
	<Route path="/" component={Layout} history={browserHistory}>
		<IndexRoute component={Index} />
		<Route path="/charter" component={Charter} />
		<Route path="*" component={NotFound} />
	</Route>
);

export default routes;
