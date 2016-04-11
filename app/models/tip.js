import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  text: DS.attr(),
  date: DS.attr(),
  likes: DS.attr(),
  venue: DS.belongsTo('venue', {async: true})
});
