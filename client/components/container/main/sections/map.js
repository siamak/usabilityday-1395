import React, {Component, PropTypes} from 'react';
import GoogleMap from 'google-map-react';

import MyGreatPlace from './place';

const styles = [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#373652"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#9e9e9e"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#373652"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2C2C40"}]},{"featureType":"road.highway.controlled_access","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"on"}]}];

function createMapOptions(maps) {
	return {
		styles, scrollwheel: false,
		// scaleControl: true,
		// zoomControl: true,
		// mapTypeControl: true,
		disableDefaultUI: true
	};
}
class Map extends Component {
	render() {
		return (
			<div style={{ width: '100%', height: '22rem' }}>
				<GoogleMap
					bootstrapURLKeys={{
						key: 'AIzaSyAZcuPYRWwSN3J25-ew59BESdrFiyikJG4',
						language: 'fa',
					}}
					center={this.props.center}
					zoom={this.props.zoom}
					options={createMapOptions}
					yesIWantToUseGoogleMapApiInternals={true}
					onGoogleApiLoaded={() => { document.querySelector('#pinPlace').style.display = 'block' }}
				>
				<MyGreatPlace lat={35.734392} lng={51.445806} />
				</GoogleMap>
			</div>
		);
	}
}

/**
 * Props Validation
 */
Map.propTypes = {
	center: PropTypes.array,
	zoom: PropTypes.number,
	greatPlaceCoords: PropTypes.any
};

/**
 * Exporting Method
 */
export default Map;
