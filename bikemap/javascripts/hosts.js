function createHostMarkers(hosts) {
  return hosts.map(coordinate => createHostMarker(coordinate));
}

function createHostMarker(coordinate) {
  return marker = new google.maps.Marker({
    position: new google.maps.LatLng(coordinate[0], coordinate[1]),
    title: 'Host'
  });
}
