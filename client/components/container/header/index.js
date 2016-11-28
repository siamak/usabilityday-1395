import React, { Component } from 'react';
import offset from 'global-offset';
import jump from 'jump.js';

/* Import JS Modules */
import { Container, Row, Col } from '../grid/';
import Timer from '../timer/timer';
import Icon from '../icons/icon';

/* Icons */
import IconCalendar from '../icons/block-calendar.svg';
import IconUXAward from '../icons/uxaward.svg';

/* Import SCSS Modules */
import styles from './header.scss';

class Header extends Component {
	render() {
		return (
			<header id="start" className={`${styles.Header} ${styles.rulerPatch}`}>
				<Container>
					<nav className={styles.HeaderNav}>
						<Row classname="items_spaced_between item_center_v">
							<Col xs={12} sm={6} classname="direction_row items_center_v">
								<h1 className={styles.HeaderNavTitle}>
									<i className={styles.UsabilityLogo} />
									روز کاربردپذیری ۹۵
								</h1>
							</Col>
							<Col xs={12} sm={6} classname="align-left offMobile">
								<div className={`${styles.HeaderNavInline} items_right items_center_v`}>
									<Icon glyph={IconCalendar} className={`icon ${styles.HeaderNavInline} space-left`} />
									<span className={`${styles.HeaderNavInline}`}>همایش های گذشته:</span>
									<a className={styles.HeaderNavLink} href="http://www.usabilityday.ir/2014/" rel="noopener noreferrer" target="_blank">۱۳۹۳</a>
									<a className={styles.HeaderNavLink} href="http://www.usabilityday.ir/2015/" rel="noopener noreferrer" target="_blank">۱۳۹۴</a>
								</div>
							</Col>
						</Row>
					</nav>
					<Row classname="items_bottom full-viewport-height">
						<Col xs={12} sm={12}>
							{/* <Container> */}
							<section
							// data-0="opacity: 1;"
							// data-top-bottom="opacity: 0;"
							data-20="opacity: 1;top: 0%;"
							data-top-bottom="opacity: 0;top: 10%;"
							className={`fadescroll ${styles.HeroHeader}`}
							>
								<h2 className={`${styles.title} wow`}>انجمن حرفه‌ای تجربه کاربری ایران تقدیم می‌کند:</h2>
								{/* <h1 className={`heroTitle ${styles.heroTitle}`}>
									محصول کاربردپذیر؛
									<br />
									کاربردپذیری تعاملی بین کاربر و محصول است.
									<br />
									محصول خود را کاربرد پذیر بسازیم...
								</h1> */}
								<h1 className={`heroTitle ${styles.heroTitle}`}>
									هفتمین همایش کاربردپذیری
									<br />
									محور همایش تجربه کاربری پایدار
									<br />
									مهلت ثبت‌نام؛ ۱۹ آبان ۱۳۹۵
								</h1>
								<section className={styles.HeaderInfo}>
									<Row classname="items_spaced_around item_top">
										<Col xs={12} sm={4} md={4} classname="wow">
											<h4 className={`${styles.HeaderInfo_Title}`}>زمان؟</h4>
											<p>
												روز جهانی کاربردپذیری؛
												<br />
												پنج‌شنبه ۲۰ آبان ۱۳۸۵. ساعت ۸ صبح تا ۱ بعدازظهر.
											</p>
										</Col>
										<Col xs={12} sm={4} md={4} classname="wow">
											<h4 className={`${styles.HeaderInfo_Title}`}>مکان؟</h4>
											<p>
												مرکز همایش های شهید قندی؛
												<br />
												تهران، خیابان شریعتی، وزارت ارتباطات و فناوری اطلاعات
											</p>
										</Col>
										<Col xs={12} sm={4} md={4} classname="wow">
											<h4 className={`${styles.HeaderInfo_Title}`}>چه کسانی؟</h4>
											<p>برنامه‌نویسان، طراحان، مدیران، کارآفرینان، سرمایه‌گذاران، اصحاب رسانه، دانشجویان و علاقمندان IT.</p>
										</Col>
									</Row>
								</section>

								<section className={styles.HeaderFoot}>
									<Row classname="items_spaced_between items_center_v">
										<Col xs={12} sm={8} md={8} classname={styles.HeaderFootButtons}>
											<a
											onClick={jump.bind(this, '#tickets')}
											className="button blue"
											>
												ثبت‌نام در همایش
											</a>
											<a
											href="http://uxaward.ir/"
											className="button mustard"
											target="_blank"
											rel="noopener noreferrer"
											>
												<Icon
												glyph={IconUXAward}
												className="icon space-left"
												role="presentation"
												alt="UXAward.ir | سومین جایزه کاربردپذیری"
												width="32"
												height="32"
												/>
												<span>سومین جایزه کاربردپذیری</span>
											</a>
										</Col>
										<Col xs={12} sm={4} md={4} classname="wow align-left">
											{/* <i className={styles.Waves} /> */}
											<Timer
												classTime={styles.toConf}
												classVal={styles.toConfVal}
												classType={styles.toConfType}
												date="November 10, 2016 08:30:00"
											/>
										</Col>
									</Row>
								</section>
							</section>
						</Col>
					</Row>
				</Container>
			</header>
		);
	}
}

export default Header;
