import React, { Component } from 'react';
// import window from 'window-or-global';
// import scrollReveal from 'scrollreveal';
// import skrollr from 'skrollr';

// import { Container, Row, Col } from './grid';
import Header from './header/';
import Nav from './nav/';
import Dots from './dots/';
import Main from './main/main';
import Footer from './footer/footer';
// import styles from '../../assets/css/styles.scss';

class Index extends Component {
	componentDidMount() {
		const scrollReveal = require('scrollreveal');
		const skrollr = require('skrollr');

		const wowProps = {
			delay: 700,
			duration: 1000,
			scale: 1,
			distance: '50%',
			easing: 'cubic-bezier(0.1, 0.3, 0.1, 1)',
		};
		const scroll = scrollReveal();
		scroll.reveal('.heroTitle', { duration: 1200 });
		scroll.reveal('.wow', wowProps, 300);


		// skrollr.init({
		// 	mobileCheck() {
		// 		return false;
		// 	},
		// });
	}

		// $window.addEventListener('scroll', () => {
		// 	const pageHeight = window.outerHeight;
		// 	const scrollPos = window.scrollY;
		// 	// const opacity = 1 - (scrollPos / 500);
		// 	// const rotate = 1 + (scrollPos / 8);
		// 	const trans = scrollPos / 32;
		//
		// 	if (scrollPos < pageHeight) {
		// 		// console.log(trans);
		// 		requestAnimationFrame(() => {
		// 			// document.querySelector('.gradient').style.top = `${trans}px`;
		// 			// document.querySelector('.scrolling').style.transform = `translateY(-${trans}px)`;
		// 			document.querySelector('.fadescroll').style.transform = `translateY(${trans / 2}px)`;
		// 			// document.querySelector('.fadescroll').style.opacity = opacity;
		// 		});
		// 	}
		// });
	render() {
		return (
			<main className="usabilityday">
				<Header />
				<span className="gradient" />
				<Dots />
				<Main />
				<Footer />
				<Nav
					sections={['start', 'intro', 'speakers', 'schedule', 'map', 'tickets', 'sponsors', 'organizers']}
					name={['شروع','معرفی','سخنران‌ها', 'جدول زمانی', 'محل برگزاری','تهیه بلیت','حامیان','برگزارکنندگان','حامیان']}
				/>
			</main>
		);
	}
}

export default Index;
