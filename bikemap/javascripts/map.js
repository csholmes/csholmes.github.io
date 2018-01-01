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

  route.show(map);

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


  hosts.show(map);
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


function togglePictures(cb) {
    if (cb.checked) {
        showPictures(map);
    } else { 
        showPictures(null);
    }
}
