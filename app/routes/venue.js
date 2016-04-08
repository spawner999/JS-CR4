import Ember from 'ember';

export default Ember.Route.extend({
  foursquare: Ember.inject.service('four-square'),
  model(params){
    return this.get('foursquare').venues.filter(function(venue){
      return venue.get('name') === params.name.replace('%20', ' ');
    })
  }
});
