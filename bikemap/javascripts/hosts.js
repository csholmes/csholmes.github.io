var hosts = new hostMarkers(host_data);

function hostMarkers(host_data) {
  this.hostMarkers = createHostMarkers(host_data);
  this.map = null;
}

hostMarkers.prototype.show = function(map) {
  this.hostMarkers.forEach(hostMarker => hostMarker.setMap(map));
  this.map = map;
}

hostMarkers.prototype.toggle = function(show) {
  var setting = show ? this.map : null;
  this.hostMarkers.forEach(hostMarker => hostMarker.setMap(setting));
}

function createHostMarkers(host_data) {
  return host_data.map(coordinate => createHostMarker(coordinate));
}

function createHostMarker(coordinate) {
  return new google.maps.Marker({
    position: new google.maps.LatLng(coordinate[0], coordinate[1]),
    title: 'Host'
  });
}

function toggleHosts(show) {
  hosts.toggle(show);
}
