import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './grid.scss';


class Row extends Component {
	render() {
		const props = this.props;
		const rowClass = classNames({
			[props.classname]: props.classname,
			[styles.Row]: styles.Row,
		});
		return (
			<section className={rowClass}>{this.props.children}</section>
		);
	}
}

class Container extends Component {
	render() {
		return (
			<section className={styles.Container}>{this.props.children}</section>
		);
	}
}

class Col extends Component {
	render() {
		const props = this.props;
		const colClass = classNames({
			[props.classname]: props.classname,
			[styles[`Col_xs_${props.xs}`]]: props.xs,
			[styles[`Col_sm_${props.sm}`]]: props.sm,
			[styles[`Col_md_${props.md}`]]: props.md,
			[styles[`Col_lg_${props.lg}`]]: props.lg,
		});
		return (
			<div className={colClass}>{this.props.children}</div>
		);
	}
}

/**
 * Props Validation
 */
Col.propTypes = {
	children: PropTypes.node,
	classname: PropTypes.string,
	xs: PropTypes.number,
	sm: PropTypes.number,
	md: PropTypes.number,
	lg: PropTypes.number,
};

Row.propTypes = {
	children: PropTypes.node,
};

Container.propTypes = {
	children: PropTypes.node,
};


/**
 * Exporting methods
 */
export { Row, Container, Col };
