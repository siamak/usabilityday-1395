import React, { Component } from 'react';
import { throttle, random, times } from 'lodash';
import $window from 'window-or-global';
import anime from 'animejs';

import Dot from './dot';
import styles from './dots.scss';


export default class Dots extends Component {
	constructor(props) {
		super(props);
		const dotSize = 3;
		this.state = {
			dots: [],
			colors: ['#FFF', '#FFE9B6', '#b47d9b', '#ffd471'],
			dotSize,
		};
	}

	componentWillMount() {
		this.sizing();
	}

	componentDidMount() {
		this.animateDots();
		$window.addEventListener('resize', throttle(this.sizing.bind(this), 100));
	}

	componentDidUpdate() {
		this.animateDots();
	}

	componentWillUnmount() {
		$window.removeEventListener('resize', throttle(this.sizing.bind(this), 100));
		anime.remove('.dot_item');
	}


	animateDots() {
		anime({
			targets: '.dot_item',
			translateY: {
				value(el, index) {
					if (index % 2 === 0) {
						return 130;
					}
					return -130;
				},
				easing: 'easeInOutQuad',
			},
			translateX: {
				value(el, index) {
					if (index % 2 === 0) {
						return 150;
					}
					return -150;
				},
				easing: 'easeInOutExpo',
				delay: 8500,
			},
			// opacity: {
			// 	value(el, index) {
			// 		if (index % 16 === 0) {
			// 			return 1;
			// 		}
			// 		return [0.6, 0.7];
			// 	},
			// 	elasticity: 10,
			// 	easing: 'easeInOutExpo',
			// },
			direction: 'alternate',
			elasticity: 800,
			delay: 5000,
			duration() {
				return (anime.random(3000, 5000));
			},
			loop: true,
		});
		// console.log(anime.easings);
	}

	sizing() {
		const that = this;
		const [width, height] = [$window.innerWidth, $window.innerHeight];
		const asType = (((width / height) >= 0.9 && (width / height) <= 1.1) ? 'sqr' : 'rct');

		// const countX = Math.round((width - that.state.dotSize) / 98);
		// const countY = asType === 'sqr' ? Math.round((height - that.state.dotSize) / 100) : countX;
		const countX = Math.round(width / 130) + 1;
		const countY = Math.round(height / 130) + 1;

		that.setState({
			width,
			height,
			asType,
			countX,
			countY,
		});

		this.state.dots.length = 0;

		times(countX, i => {
			times(countY, j => {
				this.state.dots.push([this.calcX(i), this.calcY(j)]);
			});
		});
	}

	calcX(index) {
		return 40 + this.state.dotSize + (index * 150);
	}

	calcY(index) {
		return 40 + this.state.dotSize + (index * 130);
	}
	// calcX(index) {
	// 	return 32 + this.state.dotSize + (index * 98);
	// }
	//
	// calcY(index) {
	// 	return 20 + this.state.dotSize + (index * 100);
	// }


	render() {
		return (
			<section className={`${styles.dots}`}>
				<svg
					viewBox={`0 0 ${this.state.width || 1080} ${this.state.height || 900}`}
					height={this.state.height}
					width={this.state.width}
				>
					{
						this.state.dots.map((dot, i) => {
							const pos = {
								right: dot[0],
								top: dot[1],
							};
							return (
								<Dot
									key={i}
									index={i}
									position={pos}
									classname={`dot_item ${styles.dot}`}
									size={this.state.dotSize}
									color={this.state.colors[random(0, this.state.colors.length - 1)]}
								/>
							);
						})
					}
				</svg>
			</section>
		);
	}
}
