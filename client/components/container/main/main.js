import React, { Component } from 'react';
import $window from 'window-or-global';
import jump from 'jump.js';

/* Import JS Modules */
import { Container, Row, Col } from '../grid/';
import { organizers, speakers, schedule, getTime, sponsors } from '../../data/';
import persian from '../persian';

/* Import IMGs Modules */
import Icon from '../icons/icon';
import IconTwitter from '../icons/twitter.svg';
import IconLinkedin from '../icons/linkedin.svg';
import IconDownload from '../icons/download.svg';
// import AmirAbbas from '../speakers/amirabbas.jpg';

/* Import SCSS Modules */
import styles from './main.scss';

/**
 * Sections:
 */
import Map from './sections/map';
import Intro from './sections/intro';

class Main extends Component {
	componentDidMount() {
		this.evandLoader();
	}

	evandLoader() {
		/**
		 * EVAND CONFIGURATION
		 */
		const evand = $window.evand = {};
		evand.theme = 'default';
		evand.eventSlug = 'usability2016';
		const script = $window.document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.src = `${'https:' === $window.document.location.protocol ? 'https://' : 'http://'}static.evand.ir/embed/script.js?load=1`;
		const e = $window.document.getElementsByTagName('script')[0];
		e.parentNode.insertBefore(script, e);
	}
	render() {
		return (
			<section className={styles.Wrapper}>
				<Container>
					<section className={`${styles.WrapperBody} scrolling`}>
						<Intro />
						<section id="speakers" className={`${styles.Section}`}>
							<h1 className={styles.Title}>سخنران‌ها</h1>
							<h2 className={styles.Subtitle}>ارائه دهندگان امسال روز جهانی کاربردپذیری:</h2>
							<Row classname={`${styles.RowNativeSize} MatchHeight`}>
								{
									speakers.map((item, i) =>
										(<Col xs={12} sm={6} key={i}>
											<figure id={item.slug_name} className={`${styles.SpeakerBox}`}>
												<div className="FigureRight">
													<svg viewBox="0 0 400 400" className="svg">
														<defs>
															<filter id="duotone-filter-post-three">
																<feColorMatrix
																	type="matrix"
																	values="0.91015625 0 0 0 0.0859375 0.7421875 0 0 0 0.0859375 0.35546875 0 0 0 0.0859375 0 0 0 1 0"
																/>
															</filter>
														</defs>
														<image
															xlinkHref={item.avatar}
															filter="url(#duotone-filter-post-three)"
															preserveAspectRatio="xMidYMin slice"
															width="400"
															height="400"
														/>
													</svg>
													{/* <img src={item.avatar} /> */}
												</div>
												<figcaption className="FigureOverflow">
													<h4 className={styles.SpeakerBoxName}>
														{item.real_name}
													</h4>
													<div className={styles.SpeakerBoxAbout}>
														{
															item.company ?
																<span>{item.company}</span>
																:
																null
														}
														{
															item.skill ?
																<span>{item.skill}</span>
																:
																null
														}
														{
															item.time ?
																<span>{item.time}</span>
																:
																<span>{persian(getTime(item.real_name)[0].start)}</span>
														}
													</div>
													<p className={styles.SpeakerBoxInfo}>
														{persian(item.info)}
													</p>
													<div className={styles.SpeakerBoxSocial}>
														{
															item.social.twitter ?
																<a
																	href={`https://twitter.com/${item.social.twitter}`}
																	rel="noopener noreferrer"
																	target="_blank"
																>
																	<Icon
																		glyph={IconTwitter}
																		className="icon"
																		role="presentation"
																		alt="Twitter"
																		width="32"
																		height="32"
																	/>
																</a>
															:
															null
														}
														{
															item.social.linkedin ?
																<a
																	href={item.social.linkedin}
																	rel="noopener noreferrer"
																	target="_blank"
																>
																	<Icon
																		glyph={IconLinkedin}
																		className="icon"
																		role="presentation"
																		alt="Twitter"
																		width="32"
																		height="32"
																	/>
																</a>
															:
															null
														}
													</div>
												</figcaption>
											</figure>
										</Col>
									)
								)}
							</Row>
						</section>

						<section id="schedule" className={`${styles.Section} ${styles.Schedule}`}>
							<h1 className={styles.Title}>جدول زمانی</h1>
							<h2 className={styles.Subtitle}>برنامه زمانی امسال روز جهانی کاربردپذیری</h2>
							{
								schedule.map((item, i) =>
									(
										<section key={i} className={`${styles.ScheduleLineup} ${item.type}`}>
											<time className={styles.ScheduleLineupTime}>{persian(item.start)} — {persian(item.end)}</time>
											<h4 className={styles.ScheduleLineupTitle}>
												{
													item.slug ?
													<a className={styles.ScheduleLineupTitleSpace} onClick={jump.bind(this, `#${item.slug}`)}>
														{item.title}
													</a>
													:
													<span className={styles.ScheduleLineupTitleSpace}>
														{item.title}
													</span>
												}
												<span className={styles.ScheduleLineupSubject}>{item.subject}</span>
											</h4>
											{
												item.file ?
													<a className={styles.ScheduleLineupDownload} href={item.file}>
														<Icon
															glyph={IconDownload}
															className="icon space-left"
															role="presentation"
															alt="Download"
															width="25"
															height="25"
														/>
														دریافت فایل ارائه
													</a>
													:
													<span></span>
											}
										</section>
									)
								)
							}
						</section>


						<section id="map" className={`${styles.Section}`}>
							<Row classname="items_center_h">
								<Col xs={12} sm={5}>
									<h1 className={styles.Title}>محل برگزاری</h1>
								</Col>
								<Col xs={12} sm={7}>
									<p className="IsBold Lead">همایش کاربرد پذیری، همایش یک روزه در ۲۰ آبان مصادف با روز جهانی کاربردپذیری در تهران برگزار می‌شود. فرصتی است تا با بهترین‌های این حوزه آشنا شوید و تجارب خود را باهم به اشتراک بگذارید. در همایش کاربرد پذیری،‌ طراحان تجربه کاربری و رابط کاربری حضور دارند.امسال در پنج‌شنبه، ۲۰ آبان ۱۳۹۵ در مرکز همایش های شهید قندی هم‌دیگر را ملاقات خواهیم کرد.</p>
								</Col>
							</Row>

							<Row classname="items_center_h">
								<Col xs={12} sm={5}>
									<div className={styles.Location}>
										<h3 className={`${styles.TitleLined}`}>
											<span>نشانی</span>
										</h3>
										<span className={styles.LocationStep}>ایران. تهران،</span>
										<span className={styles.LocationStep}>خیابان شریعتی، پایین تر از پل سیدخندان،</span>
										<span className={styles.LocationStep}>وزارت ارتباطات و فناوری اطلاعات، مرکز همایش های شهید قندی.</span>
									</div>
								</Col>
								<Col xs={12} sm={7}>
									<section className={styles.Map}>
										<Map
											zoom={16}
											// center={[35.736058, 51.446078]}
											center={[35.734392, 51.445806]}
										/>
									</section>
								</Col>
							</Row>
						</section>

						<section id="tickets" className={`${styles.Section} ${styles.Tickets}`}>
							<Row classname="items_center_h">
								<Col xs={12} sm={5}>
									<h1 className={styles.Title}>تهیه بلیت</h1>
									<p className={`${styles.TicketsLead}`}>علاقمندان به حضور در این رویداد می‌توانند از طریق پنل مقابل و بعد از انتخاب تعداد بلیط مورد نظر، دکمه خرید را کلیک کنند و بعد از تکمیل فرم اطلاعات مربوطه با پرداخت الکترونیک هزینه ، خرید بلیط را نهایی کنند.</p>
								</Col>
								<Col xs={12} sm={7}>
									<section id="evand">
										<section id="evand-content" />
									</section>
								</Col>
							</Row>
						</section>

						<section id="sponsors" className={`${styles.Section}`}>
							<h1 className={styles.Title}>حامیان</h1>
							<h2 className={styles.Subtitle}>حامیان امسال روز جهانی کاربردپذیری</h2>
							<Row classname="items_center_v">
								{
									sponsors.map((item, i) =>
										(<Col xs={12} sm={5} md={3} key={i}>
											<a
												href={item.website}
												className={`${styles.CardBox} ${styles.CardBoxCenter}`}
												rel="noopener noreferrer"
												target="_blank"
											>
												<img
													src={item.logo}
													alt={`${item.company}`}
													role="presentation"
												/>
												<span className={`${styles.Company}`}>{item.company}</span>
											</a>
										</Col>)
									)
								}
							</Row>
						</section>

						<section id="organizers" className={`${styles.Section}`}>
							<h1 className={styles.Title}>برگزارکنندگان</h1>
							<h2 className={styles.Subtitle}>برگزارکنندگان امسال روز جهانی کاربردپذیری</h2>
							<Row classname="items_center_v">
								{
									organizers.map((item, i) =>
										(<Col xs={12} sm={5} md={3} key={i}>
											<a
												href={item.website}
												className={`${styles.CardBox} ${styles.CardBoxCenter}`}
												rel="noopener noreferrer"
												target="_blank"
											>
												<img
													src={item.logo}
													alt={`${item.company} | ${item.slug}`}
													role="presentation"
												/>
												<span className={`${styles.Company}`}>{item.company}</span>
											</a>
										</Col>)
									)
								}
							</Row>
						</section>
						<section className={`${styles.Section} ${styles.Social}`}>
							<h3 className={`${styles.SocialTitle} SystemFont`}>
								<a href="https://twitter.com/intent/tweet?hashtags=WUD2016&via=uxiran" rel="noopener noreferrer" target="_blank">#WUD2016</a>
							</h3>
							<p>هنگام انتشار مطالب خود در شبکه‌های اجتماعی از هش‌تگ <span className="SystemFont">WUD2016</span> استفاده کنید.</p>
						</section>
					</section>
				</Container>
			</section>
		);
	}
}

export default Main;
