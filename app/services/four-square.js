import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),
  map: Ember.inject.service('google-map'),
  venues: [],
  getVenues(city, category){
  var CLIENT_ID = 'FXPVOMSAFOZUD1524IILXHISXJOZW03GOW21JW4JJTFXAPY0';
  var CLIENT_SECRET = 'KEBR0V3IBLQ025W0S3UVXZEBASVGXB5NDBR1KHG3WWWIHQI2';
    var url = 'https://api.foursquare.com/v2/venues/explore?client_id=' +
    CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&near=' + city + '&section=' + category + '&v=20160408';
    this.set('venues', []);
    var self = this;
    return Ember.$.getJSON(url).then(function(response){
      var venues = [];
      for(var i=0; i<10; i++){
        var current = response.response.groups[0].items[i].venue;
        var params = {
          name: current.name,
          rating: current.rating,
          lat: current.location.lat,
          lng: current.location.lng,
          address: current.location.address,
        };
        var venue = self.get('store').createRecord('venue', params);
        self.get('venues').push(venue);
        venues.push(venue);
      }
      return venues;
    });
  }
});
