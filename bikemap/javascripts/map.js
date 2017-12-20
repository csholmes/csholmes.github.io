var routepath = createRoutepath(route);
var pictureMarkers = createPictureMarkers(photos);
var pictureWindows = createPictureWindows(photos);
var hostMarkers = createHostMarkers(hosts);
var map;

function initialize() {

  // SETUP MAP

  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(38, -100),
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    scaleControl: true
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  routepath.setMap(map);
  showPictureMarkers(map, pictureMarkers);


  pictureWindows.forEach(pictureWindow => pictureWindow.setMap(map));

  createPictureListeners(map, pictureMarkers, pictureWindows, photos);

  pictureWindows.forEach(pictureWindow => pictureWindow.close());


  hostMarkers.forEach(hostMarker => hostMarker.setMap(map));
}

google.maps.event.addDomListener(window, 'load', initialize);


//function switchPic(map,toclose,toopen) {
//  pic_windows[toclose].close(map,pic_markers[toclose]);
//  pic_windows[toopen].open(map,pic_markers[toopen]);
//}

 
function toggleHosts(cb) {
  if (cb.checked) {
    hostMarkers.forEach(hostMarker => hostMarker.setMap(map));
  } else { 
    hostMarkers.forEach(hostMarker => hostMarker.setMap(null));
  }
}

function togglePictureMarkers(cb) {
  if (cb.checked) {
    showPictureMarkers(map, pictureMarkers);
  } else { 
    showPictureMarkers(null, pictureMarkers);
  }
}
