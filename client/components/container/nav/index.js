import React, { PropTypes, Component } from 'react';
import { map } from 'lodash';
import $window from 'window-or-global';
import offset from 'global-offset';
import jump from 'jump.js';

/* Import SCSS Modules */
import styles from './nav.scss';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sections: this.props.sections,
			offsetTops: [],
		};
	}
	componentDidMount() {
		const sections = this.state.sections;
		const offsetTops = [];

		if (sections.length > 0) {
			sections.map((id) => {
				offsetTops[id] = offset(document.querySelector(`#${id}`)).top;
			});
		}

		$window.addEventListener('scroll', this.calcSection.bind(this, offsetTops));
	}

	componentWillUnmount() {
		$window.removeEventListener('scroll', this.calcSection.bind(this));
	}

	calcSection(offsetTops) {
		const sections = this.state.sections;
		const scrollTop = window.scrollY;
		let last;
		sections.map((id) => {
			if (scrollTop + 200 >= offsetTops[id]) {
				last = id;
			}
		});

		if (last) {
			this.setState({
				last,
			});
		}
	}
	render() {
		const sectionClass = this.state.last;
		return (
			<nav className={styles.Nav}>
				<ul>
					{
						this.props.sections.map((id, i) => {
							return (
								<li className={sectionClass === id ? styles.active : null} key={i}>
									<a
										onClick={jump.bind(this, `#${id}`)}
									>
										<span>{this.props.name[i]}</span>
									</a>
								</li>
							)
						})
					}
				</ul>
			</nav>
		);
	}
}


/**
 * Props Validation
 */
Nav.propTypes = {
	sections: PropTypes.array,
	name: PropTypes.array,
};


/**
 * Exporting Method
 */
export default Nav;
