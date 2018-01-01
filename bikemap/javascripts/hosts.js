var hosts = new hostMarkers(host_data);

function hostMarkers(host_data) {
  this.hostMarkers = createHostMarkers(host_data);
}

hostMarkers.prototype.show = function(map) {
  this.hostMarkers.forEach(hostMarker => hostMarker.setMap(map));
}

function createHostMarkers(host_data) {
  return host_data.map(coordinate => createHostMarker(coordinate));
}

function createHostMarker(coordinate) {
  return marker = new google.maps.Marker({
    position: new google.maps.LatLng(coordinate[0], coordinate[1]),
    title: 'Host'
  });
}
