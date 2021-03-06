import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('city', {path: 'city/:query'});
  this.route('venue', {path: 'venue/:id'});
});

export default Router;
