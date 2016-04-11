import Ember from 'ember';

export default Ember.Route.extend({
  map: Ember.inject.service('google-map'),
  foursquare: Ember.inject.service('four-square'),
  model(params){
    return Ember.RSVP.hash({
      city: params.query,
      venues: this.get('foursquare').getVenues(params.query, 'food')
    });
  }
});
