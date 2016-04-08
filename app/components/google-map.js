export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap() {
      var container = this.$('.map-display')[0];
      var query = this.get('city');
      this.get('map').geocodeAddress(container, query);
    }
  }
});
