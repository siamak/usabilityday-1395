import React, { Component } from 'react';
import { Container, Row, Col } from '../grid/';
// import $window from 'window-or-global';

import Icon from '../icons/icon';
import Siamak from '../icons/siamak.svg';
import IconTwitter from '../icons/twitter.svg';
import IconGooglePlus from '../icons/googleplus.svg';
import IconFacebook from '../icons/facebook.svg';
import IconInstagram from '../icons/instagram.svg';

import styles from './footer.scss';

class Main extends Component {
	render() {
		return (
			<footer id="end" className={`${styles.Footer}`}>
				<Container>
					<Row>
						<Col xsm={12} sm={6}>
							<h5 className={styles.richText}>روز کاربرد پذیری ۱۳۹۵
								<span className={styles.slogan}>
									•
								</span>
								<span className={styles.slogan}>
									زندگی را آسان کنید
								</span>
							</h5>
							<h5 className={styles.richText}>
								شماره تماس: ۸۴۲۰۲-۰۲۱ — داخلی ۳۵۹.
							</h5>
							{/* <a
								href="http://siamak.us/?utm_campaign=Signature&utm_medium=banner&utm_source=Usabilityday-16"
								target="_blank"
								rel="noopener noreferrer"
								title="طراحی و اجرا؛ سیامک مختاری"
								className={styles.Siamak}
							>
								<Icon
									glyph={Siamak}
									className="icon"
									role="presentation"
									title="Siamak Mokhtari | سیامک مختاری"
									width="60"
									height="60"
								/>
							</a> */}
						</Col>
						<Col xsm={12} sm={6} classname={`${styles.SocialLinks} items_right direction_row items_center_v`}>
							<a href="https://plus.google.com/113726324458095725134" rel="publisher" target="_blank">
								<Icon
									glyph={IconGooglePlus}
									className="icon space-left"
									role="presentation"
									alt="GooglePlus"
									width="22"
									height="22"
								/>
							</a>
							<a href="http://www.twitter.com/uxiran" target="_blank">
								<Icon
									glyph={IconTwitter}
									className="icon space-right space-left"
									role="presentation"
									alt="Twitter"
									width="22"
									height="22"
								/>
							</a>
							<a href="http://www.instagram.com/uxiran" target="_blank">
								<Icon
									glyph={IconInstagram}
									className="icon space-right space-left"
									role="presentation"
									alt="instagram"
									width="22"
									height="22"
								/>
							</a>
							<a href="http://www.facebook.com/usabilityday" target="_blank">
								<Icon
									glyph={IconFacebook}
									className="icon space-right"
									role="presentation"
									alt="facebook"
									width="22"
									height="22"
								/>
							</a>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}

export default Main;
