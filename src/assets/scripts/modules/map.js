(function initMap() {
  var element = document.getElementById('map');
  var options = {
    zoom: 16,
    disableDefaultUI: true,
    scrollwheel: false,
    center: {
      lat: 45.024839,
      lng: 38.902187
    },
    styles: [{
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "landscape",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#d4d4d4"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.business",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.park",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [{
            "color": "#d4d4d4"
          },
          {
            "weight": 1
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [{
          "color": "#d4d4d4"
        }]
      },
      {
        "featureType": "road.highway",
        "stylers": [{
          "color": "#d4d4d4"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#d4d4d4"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "water",
        "stylers": [{
          "color": "#61dac9"
        }]
      }
    ]
  };

  var myMap = new google.maps.Map(element, options);

  var marker = new google.maps.Marker({
    position: {
      lat: 45.025001,
      lng: 38.907025
    },
    map: myMap,
    icon: 'assets/images/icons/svg/map_marker.svg'
  });
})();