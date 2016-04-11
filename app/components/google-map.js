export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
didInsertElement(){
  this.get('map').geocodeAddress(this.get('city'));
}
});
