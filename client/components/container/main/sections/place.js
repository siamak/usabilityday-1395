import React, { Component } from 'react';
import { greatPlaceStyle } from './placeStyle.js';

export default class MyGreatPlace extends Component {
	render() {
		return (
			<i id="pinPlace" style={greatPlaceStyle} />
		);
	}
}
