import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  geocoder: new google.maps.Geocoder(),
  infoWindow: new google.maps.InfoWindow(),
  foursquare: Ember.inject.service('four-square'),
  geocodeAddress(query) {
    var venues = this.get('foursquare').venues;
    console.log(venues);
    var self=this;
      this.geocoder.geocode({'address': query}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          var options = {
            center: results[0].geometry.location,
            zoom: 8
          };
          var container = document.getElementById('map-display');
          var map = new self.googleMaps.Map(container, options);
          venues.forEach(function(venue){
            self.createMarker(venue, map);
          })
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
    });
  },
  createMarker(venue, map){
  var self=this;
  var latlng = new google.maps.LatLng(venue.get('lat'), venue.get('lng'));
  var marker = new google.maps.Marker({
    map: map,
    position: latlng
  });
  console.log(marker);
  marker.addListener('click', function() {
    self.get('infoWindow').setContent(venue.get('name') + ' ' + venue.get('rating') + '<br>');
    this.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function() {
      marker.setAnimation(false);
    }, 2050);
    self.get('infoWindow').open(map, marker);
  });
  return marker;
}
});
