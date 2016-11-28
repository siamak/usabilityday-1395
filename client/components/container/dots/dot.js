import React, { Component, PropTypes } from 'react';

class Dot extends Component {
	render() {
		return (
			// <svg
			// 	style={this.props.position}
			// 	className={this.props.classname}
			// 	height={this.props.size * 2}
			// 	width={this.props.size * 2}
			// >
			<rect className={this.props.classname} x={this.props.position.right} y={this.props.position.top} width={this.props.size} height={this.props.size} fill={this.props.color} />
			// </svg>
		);
	}
}


/**
 * Props Validation
 */
Dot.propTypes = {
	position: PropTypes.object,
	classname: PropTypes.string,
	size: PropTypes.number,
	color: PropTypes.string,
};


/**
 * Exporting Method
 */
export default Dot;
