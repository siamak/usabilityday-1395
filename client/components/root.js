// ==================================================
// Root
// ----
// Entry component for hot reloading.
// ==================================================

import React, { Component } from 'react';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import routes from '../routes.js';
import ga from 'react-ga';

ga.initialize('UA-51694552-5');
// import Layout from './layout/';
// import Index from './container/app';

function logPageView() {
	ga.set({
		page: window.location.pathname
	});
	ga.pageview(window.location.pathname);
}
class Root extends Component {
	render() {
		return (
			<Router
				routes={routes}
				history={browserHistory}
				onUpdate={logPageView}
				render={applyRouterMiddleware(useScroll())}
			/>
		);
	}
}


export default Root;
