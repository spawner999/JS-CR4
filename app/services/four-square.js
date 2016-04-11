import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),
  map: Ember.inject.service('google-map'),
  venues: [],
  CLIENT_ID: 'FXPVOMSAFOZUD1524IILXHISXJOZW03GOW21JW4JJTFXAPY0',
  CLIENT_SECRET: 'KEBR0V3IBLQ025W0S3UVXZEBASVGXB5NDBR1KHG3WWWIHQI2',
  getVenues(city, category){
    var url = 'https://api.foursquare.com/v2/venues/explore?client_id=' +
    this.get('CLIENT_ID') + '&client_secret=' + this.get('CLIENT_SECRET') + '&near=' + city + '&section=' + category + '&venuePhotos=1&v=20160408';
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
          code: current.id,
          img: 'https://irs3.4sqi.net/img/general/300x150' + current.photos.groups[0].items[0].suffix
        };
        var venue = self.get('store').createRecord('venue', params);
        self.get('venues').push(venue);
        venues.push(venue);
      }
      return venues;
    });
  },
  findVenue(venue_id){
    var url = 'https://api.foursquare.com/v2/venues/' + venue_id + '?&client_id=' + this.get('CLIENT_ID') + '&client_secret=' + this.get('CLIENT_SECRET') + '&v=20160408';
    var self = this;
    return Ember.$.getJSON(url).then(function(response){
      var current =response.response.venue;
      var params = {
        name: current.name,
        rating: current.rating,
        lat: current.location.lat,
        lng: current.location.lng,
        address: current.location.address,
        code: current.id,
        img: 'https://irs3.4sqi.net/img/general/350x350' + current.photos.groups[0].items[0].suffix
      };
      var venue = self.get('store').createRecord('venue', params);
      return venue;
    });
  },
  findTips(venue_id){
    var url = 'https://api.foursquare.com/v2/venues/' + venue_id + '/tips?&client_id=' + this.get('CLIENT_ID') + '&client_secret=' + this.get('CLIENT_SECRET') + '&v=20160408';
    var self = this;
    return Ember.$.getJSON(url).then(function(response){
      var items = response.response.tips.items;
      var tips = [];
      items.forEach(function(tip){
        console.log(tip.likes.count);
        var params = {
          author: tip.user.firstName,
          text: tip.text
        }
        var newTip = self.get('store').createRecord('tip', params);
        tips.push(newTip);
      });
      return tips;
    });
  }
});
