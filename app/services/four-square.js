import Ember from 'ember';

export default Ember.Service.extend({
  getVenues(city, category){
  var CLIENT_ID = 'FXPVOMSAFOZUD1524IILXHISXJOZW03GOW21JW4JJTFXAPY0';
  var CLIENT_SECRET = 'KEBR0V3IBLQ025W0S3UVXZEBASVGXB5NDBR1KHG3WWWIHQI2';
    var url = 'https://api.foursquare.com/v2/venues/explore?client_id=' +
    CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&near=' + city + '&section=' + category + '&v=20160408';
    console.log(url);
    return Ember.$.getJSON(url).then(function(response){
      console.log(response);
    });
  }
});
