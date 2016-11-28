import React, { PropTypes } from 'react';

function Icon({
	glyph,
	width = 16,
	height = 16,
	className = 'icon',
	// fill = '#FFF',
	role = 'presentation',
	title = '',
}) {
	return (
		<img
			className={className}
			width={width}
			height={height}
			role={role}
			title={title}
			src={glyph}
		/>
		// <svg className={className} width={width} height={height} role={role} title={title}>
		// 	<use xlinkHref={glyph} fill={fill} />
		// </svg>
	);
}

/**
 * Props Validation
 */
Icon.propTypes = {
	position: PropTypes.object,
	width: PropTypes.string,
	height: PropTypes.string,
	className: PropTypes.string,
	role: PropTypes.string,
	title: PropTypes.string,
	// fill: PropTypes.string,
};


/**
 * Export method
 */
export default Icon;
