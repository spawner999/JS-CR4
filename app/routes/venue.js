import Ember from 'ember';

export default Ember.Route.extend({
  foursquare: Ember.inject.service('four-square'),
  model(params){
    return Ember.RSVP.hash({
      venue: this.get('foursquare').findVenue(params.id),
      tips: this.get('foursquare').findTips(params.id)
    });
  }
});
