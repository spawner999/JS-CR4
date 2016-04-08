import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transition(query){
      this.transitionTo('city', query);
    }
  }
});
