import React from 'react';
import Helmet from 'react-helmet';


const Layout = ({ children }) => (
	<div>
		<Helmet
			title="World Usability Day 2016 - روز جهانی کاربردپذیری ۱۳۹۵"
			meta={[
				{ name: 'description', content: 'هفتمین همایش کاربردپذیری' },
				{ name: 'theme-color', content: '#33334a' },
			]}
			link={[
				{ rel: 'shortcut icon', href: require('../../assets/favicons/favicon.ico') },
				{ rel: 'apple-touch-icon', sizes: '180x180',  href: require('../../assets/favicons/apple-touch-icon.png') },
				{ rel: 'icon', type: 'image/png', sizes: '32x32',  href: require('../../assets/favicons/favicon-32x32.png') },
				{ rel: 'icon', type: 'image/png', sizes: '16x16',  href: require('../../assets/favicons/favicon-16x16.png') },
			]}
		/>
		{children}
	</div>
);

Layout.propTypes = {
	children: React.PropTypes.element,
};

export default Layout;
