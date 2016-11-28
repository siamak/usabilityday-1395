import React, { Component, PropTypes } from 'react';
import persian from '../persian.js';

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			days: '∞',
			hours: '∞',
			minutes: '∞',
			seconds: '∞',
			timeVal: '∞',
		};
	}

	componentDidMount() {
		setInterval(this.calcTime.bind(this), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.calcTime);
	}

	calcTime() {
		const now = new Date();
		const kickoff = new Date(this.props.date);
		const diff = kickoff - now;

		const days = Math.floor(diff / (1000 * 60 * 60 * 24));
		const hours = Math.floor(diff / (1000 * 60 * 60));
		const mins = Math.floor(diff / (1000 * 60));
		const secs = Math.floor(diff / 1000);

		const dd = this.fixInt(days);
		const hh = this.fixInt(hours - (days * 24));
		const mm = this.fixInt(mins - (hours * 60));
		const ss = this.fixInt(secs - (mins * 60));

		let timeVal = 0;
		let timeType = 0;

		if (dd === '00') {
			timeVal = hh;
			timeType = 'ساعت';
		}
		if (hh === '00') {
			timeVal = mm;
			timeType = 'دقیقه';
		}
		if (mm === '00') {
			timeVal = ss;
			timeType = 'ثانیه';
		}
		if (mm !== '00' && hh !== '00' && dd !== '00') {
			timeVal = dd;
			timeType = 'روز';
		}

		this.setState({
			days: dd,
			hours: hh,
			minutes: mm,
			seconds: ss,
			timeVal,
			timeType,
		});
	}

	fixInt(number) {
		if (number < 10 && number >= 0) {
			return `0${number}`;
		}
		if (number < 0) {
			return '00';
		}
		return number;
	}

	render() {
		return (
			<time className={this.props.classTime} dateTime={this.props.date}>
				{/* <span className={this.props.classVal}>{persian(this.state.timeVal)}</span> */}
				{/* <span className={this.props.classType}>{this.state.timeType}</span> */}
				{/* <span className={this.props.classVal}>تمام شد</span> */}
				<span className={this.props.classType}>تمام شد</span>
			</time>
		);
	}
}


/**
 * Props Validation
 */
Timer.propTypes = {
	date: PropTypes.string,
	classTime: PropTypes.string,
	classVal: PropTypes.string,
	classType: PropTypes.string,
};


/**
 * Exporting Method
 */
export default Timer;
