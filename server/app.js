var SurfsUp = Meteor.npmRequire('surfsup');
var su = new SurfsUp();
// su.getLocalWeather({ q: 'Teahupoo, Tahiti', format: 'json' }).then(function(response) {
//
// });

Meteor.methods({
  getWeather(place) {
    let response = su.getLocalWeather({ q: place, format: 'json' }).then((response, error) => {
      return response;
    });
    return response;
  }
})
