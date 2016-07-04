
function initMap() {
	var myLatlng = {lat: 50.019993, lng: 36.213234};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: myLatlng
	});

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'Click to zoom'
	});

	map.addListener('center_changed', function() {
	// 3 seconds after the center of the map has changed, pan back to the
	// marker.
		window.setTimeout(function() {
			map.panTo(marker.getPosition());
		}, 3000);
	});

	marker.addListener('click', function() {
		map.setZoom(18);
		map.setCenter(marker.getPosition());
	});
}


