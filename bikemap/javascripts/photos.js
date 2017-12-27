

function pictureMarkers(photos) {
  this.photos = photos;
  this.pictureWindows = createPictureWindows(this.photos);
  this.pictureMarkers = createPictureMarkers(this.photos);
  createPictureListeners(this.pictureMarkers, this.pictureWindows, this.photos);
}

pictureMarkers.prototype.show = function(map) {
  this.pictureMarkers.forEach(pictureMarker => pictureMarker.setMap(map));
  this.pictureWindows.forEach(pictureWindow => pictureWindow.close());
}

pictureMarkers.prototype.hide = function() {
  this.pictureMarkers.forEach(pictureMarker => pictureMarker.setMap(null));
}

pictureMarkers.prototype.toggle = function(map, cb) {
  //
}

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
    //position: new google.maps.LatLng(photo.lat, photo.lon),
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

function createPictureListeners(pictureMarkers, pictureWindows, photos) {
  photos.forEach((photo, index) => createPictureListener(pictureMarkers[index], pictureWindows[index], photo, index));
}

function createPictureListener(pictureMarker, pictureWindow, photo, index) {
  //google.maps.event.addListener(pictureMarker, 'click', openPictureWindow(pictureMarker, pictureWindow, photo, index));
  pictureMarker.addListener('click', function() {
    pictureWindow.open(pictureMarker.get('map'), pictureMarker);
    document.getElementById("photo_"+index).innerHTML = '<img src="https://dl.dropbox.com/s/'+photo.file+'" height=480 width=640>';
  });
}

function switchPic(map,toclose,toopen) {
  pic_windows[toclose].close(map,pic_markers[toclose]);
  pic_windows[toopen].open(map,pic_markers[toopen]);
}

//function openPictureWindow(pictureMarker, pictureWindow, photo, index) {
//  pictureWindow.open(pictureMarker.get('map'), pictureMarker);

//}

  //document.getElementById("photo_"+index).innerHTML = '<img src="https://dl.dropbox.com/s/'+photo.file+'" height=480 width=640>';

//     for (i = 0; i < pic_markers.length; i++) {
//         google.maps.event.addListener(pic_markers[i], 'click', (function(i) {
//             return function() {
//               pic_windows[i].open(map,pic_markers[i]);
//               document.getElementById("photo_"+i).innerHTML = '<img src="https://dl.dropbox.com/s/'+photos[i].file+'" height=480 width=640>'
//             }
//           })(i));
//     }

//function showPictureMarkers(map, pictureMarkers) {
//  pictureMarkers.forEach(pictureMarker => pictureMarker.setMap(map));
//}
