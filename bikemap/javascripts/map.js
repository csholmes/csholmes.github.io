var routepath = createRoutepath(route);
var pictureMarkers = createPictureMarkers(photos);
var pictureWindows = createPictureWindows(photos);
var host_markers = [];
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

  

  
 
  // CREATE PHOTO THINGS



    // hosts

    for (i = 0; i < hosts.length; i++) {
        pt = new google.maps.Marker({position: new google.maps.LatLng(hosts[i][0],hosts[i][1]), map: map, title: 'Host' });
        host_markers.push(pt);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);


//function switchPic(map,toclose,toopen) {
//  pic_windows[toclose].close(map,pic_markers[toclose]);
//  pic_windows[toopen].open(map,pic_markers[toopen]);
//}


// Sets the map on all markers in the array.


// Sets the map on all markers in the array.
function showHosts(map) {
  for (var i = 0; i < host_markers.length; i++) {
    host_markers[i].setMap(map);
  }
}
 
function toggleHosts(cb) {
  if (cb.checked) {
    showHosts(map);
  } else { 
    showHosts(null);
  }
}

function togglePictureMarkers(cb) {
  if (cb.checked) {
    showPictureMarkers(map, pictureMarkers);
  } else { 
    showPictureMarkers(null, pictureMarkers);
  }
}
