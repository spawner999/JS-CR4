import Ember from 'ember';

export default Ember.Route.extend({
  map: Ember.inject.service('google-map'),
  model(params){
    return Ember.RSVP.hash({
      city: params.query
    })

  }
});
