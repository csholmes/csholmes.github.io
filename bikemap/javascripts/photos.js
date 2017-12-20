

function createPictureWindows(photos) {
  return photos.map((photo, index) => createPictureWindow(photo, index));
}

function createPictureWindow(photo, index) {
  var content = 
    '<div id="content"> \
      <h1 id="firstHeading" class="firstHeading">'+photo.dt+'</h1> \
      <div id="photo_'+index+'"></div> \
      <div>'+photo.note+'</div> \
      <button onclick="javascript:switchPic(map,'+index+','+(index+1)+')">next</button> \
      <button onclick="javascript:switchPic(map,'+index+','+(index-1)+')">previous</button> \
    </div>';

  return new google.maps.InfoWindow({
    position: new google.maps.LatLng(photo.lat, photo.lon),
    content: content
  });
}

function createPictureMarkers(photos) {
  return photos.map(photo => createPictureMarker(photo));
}

function createPictureMarker(photo) {
  return marker = new google.maps.Marker({
    position: new google.maps.LatLng(photo.lat, photo.lon),
    title: 'Pic',
    icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
  });
}

function createPictureListeners(map, pictureMarkers, pictureWindows, photos) {
  photos.forEach((photo, index) => createPictureListener(map, pictureMarkers[index], pictureWindows[index], photo, index));
}

function createPictureListener(map, pictureMarker, pictureWindow, photo, index) {
  google.maps.event.addListener(pictureMarker, 'click', openPictureWindow(map, pictureMarker, pictureWindow, photo, index));
}

function openPictureWindow(map, pictureMarker, pictureWindow, photo, index) {
  pictureWindow.open(map);

}

  //document.getElementById("photo_"+index).innerHTML = '<img src="https://dl.dropbox.com/s/'+photo.file+'" height=480 width=640>';

//     for (i = 0; i < pic_markers.length; i++) {
//         google.maps.event.addListener(pic_markers[i], 'click', (function(i) {
//             return function() {
//               pic_windows[i].open(map,pic_markers[i]);
//               document.getElementById("photo_"+i).innerHTML = '<img src="https://dl.dropbox.com/s/'+photos[i].file+'" height=480 width=640>'
//             }
//           })(i));
//     }

function showPictureMarkers(map, pictureMarkers) {
  pictureMarkers.forEach(pictureMarker => pictureMarker.setMap(map));
}
