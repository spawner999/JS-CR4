export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
init(){
  this._super();
  this.get('map').geocodeAddress(this.get('city'));
}
});
