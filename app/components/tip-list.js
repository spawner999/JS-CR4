import Ember from 'ember';

export default Ember.Component.extend({
  sortedTips: Ember.computed('orderedTips', function(){
    return this.get('orederedTips').filter(function(tip, index){
      return index < 5;
    });
  }),
  orederedTips: Ember.computed.sort('tips', 'filter'),
  filter: ['likes:desc']
});
