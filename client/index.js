import 'react-fastclick';
// import 'react-lumberjack';
import React from 'react';
import { render } from 'react-dom';

import './assets/css/styles.scss';
import App from './components/root';

render(
	<App />,
	document.querySelector('#react-app')
);
