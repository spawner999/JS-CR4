import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showMap() {
      var query = this.get('city');
      this.sendAction('sendQuery', query);
    }
  }
});
