import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  rating: DS.attr(),
  lat: DS.attr(),
  lng: DS.attr(),
  address: DS.attr(),
  img: DS.attr(),
});
