$(() => {
	$("#map").each(function(){
		function initMap() {
			var locations = [
				["с. Рахманово, <strong>д. 172</strong>", 55.74230826, 38.6134243]
			];
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 17,
				center: new google.maps.LatLng(55.74230826, 38.6134243),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			});

			var infowindow = new google.maps.InfoWindow();
			var marker, i;

			for (i = 0; i < locations.length; i++) {
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(locations[i][1], locations[i][2]),
					map: map,
					icon: {
						url: "/app/img/marker.png",
						scaledSize: new google.maps.Size(52, 52)
					}
				});
			}
			var contentString = '<div class="map__adress">' + locations[0][0] + '</div>';
            infowindow.setContent(contentString);
        
        	infowindow.open(map, marker);
			
			google.maps.event.addListener(marker, 'click', (function() {
				return function() {
					var contentString = '<div class="map__adress">' + locations[0][0] + '</div>';
					infowindow.setContent(contentString);
					infowindow.open(map, marker);
				}
			})(marker, 0));
		};

		initMap();
	});
})