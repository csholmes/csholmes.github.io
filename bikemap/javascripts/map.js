var pic_markers = [];
var pic_windows = [];
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

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // CREATE ROUTE

  var route_enc = [];

  for (i = 0; i < route.length; i++) {
        pt = new google.maps.LatLng(route[i][0],route[i][1]);
        route_enc.push(pt);
  }

  var routepath = new google.maps.Polyline({
    path: route_enc,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 4
  });

  routepath.setMap(map);

  // END CREATE ROUTE

  // CREATE PHOTO THINGS

    for (i = 0; i < photos.length; i++) {

        var cont = '<div id="content" ><h1 id="firstHeading" class="firstHeading">'+photos[i].dt+'</h1><div id="photo_'+i+'"></div><div>'+photos[i].note+'</div><button onclick="javascript:switchPic(map,'+i+','+(i+1)+')">next</button><button onclick="javascript:switchPic(map,'+i+','+(i-1)+')">previous</button></div>';

        var infowindow = new google.maps.InfoWindow({ content: cont });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(photos[i].lat, photos[i].lon),
            map: map,
            title: 'Pic',
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        });

        pic_markers.push(marker);
        pic_windows.push(infowindow);
    }


    for (i = 0; i < pic_markers.length; i++) {
        google.maps.event.addListener(pic_markers[i], 'click', (function(i) {
            return function() {
              pic_windows[i].open(map,pic_markers[i]);
              document.getElementById("photo_"+i).innerHTML = '<img src="https://www.dropbox.com/sh/xf5h6dw6gqdipmk/'+photos[i].key+'/'+photos[i].file+'?raw=1" height=480 width=640>';
            }
          })(i));
    }


    // hosts

    for (i = 0; i < hosts.length; i++) {
        pt = new google.maps.Marker({position: new google.maps.LatLng(hosts[i][0],hosts[i][1]), map: map, title: 'Host' });
        host_markers.push(pt);
    }
}

google.maps.event.addDomListener(window, 'load', initialize);


function switchPic(map,toclose,toopen) {
  pic_windows[toclose].close(map,pic_markers[toclose]);
  pic_windows[toopen].open(map,pic_markers[toopen]);
}


// Sets the map on all markers in the array.
function showPictures(map) {
  for (var i = 0; i < pic_markers.length; i++) {
    pic_markers[i].setMap(map);
  }
}

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

function togglePictures(cb) {
    if (cb.checked) {
        showPictures(map);
    } else { 
        showPictures(null);
    }
}
