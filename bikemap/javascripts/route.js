var route = new bikeRoute(route_data);

function bikeRoute(route_data) {
  this.routePolyline = createRoutePolyline(route_data);
}

bikeRoute.prototype.show = function(map) {
  this.routePolyline.setMap(map);
}

function createRoutePolyline(route_data) {
  return new google.maps.Polyline({
    path: route_data.map(coordinate => new google.maps.LatLng(coordinate[0], coordinate[1])),
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 4
  });
}
