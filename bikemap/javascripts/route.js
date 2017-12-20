function create_routepath(route) {
  return new google.maps.Polyline({
    path: route.map(coordinate => new google.maps.LatLng(coordinate[0], coordinate[1])),
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 4
  });
}
