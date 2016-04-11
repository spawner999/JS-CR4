import Ember from 'ember';

export default Ember.Component.extend({
    map: Ember.inject.service('google-map'),
    actions: {
      showMap(){
        var venue = this.get('venue');
        var options = {
          center: this.get('map').center(venue.get('lat'), venue.get('lng')),
          zoom: 15
        };
        this.get('map').venueMap(options, venue);
      }
    }

});
