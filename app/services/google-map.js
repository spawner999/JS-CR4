import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  geocoder: new google.maps.Geocoder(),
  geocodeAddress(container, query) {
    var self=this;
      this.geocoder.geocode({'address': query}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          var options = {
            center: results[0].geometry.location,
            zoom: 8
          };
          return new self.googleMaps.Map(container, options);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
    });
  }
});
