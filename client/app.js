Template.queryPlace.onCreated(function() {
  var instance = this;
  instance.response = new ReactiveVar(false);
});

Template.queryPlace.helpers({
  response() {
    console.log(Template.instance().response.get().data);
    return Template.instance().response.get().data;
  }
})

Template.queryPlace.events({
  'submit form': function(event,template) {
    event.preventDefault();

    var place = template.$('[name=place]').val();
    if (!place) {
      return Message.throw('You have to enter something', 'error');
    }
    Meteor.call('getWeather', place, function(error, result) {
      if (error) {
        console.log(error);
      } else {
        template.response.set(JSON.parse(result));
      }
    });
  }
})

Template.responseTemplate.helpers({
  lastUpdate(time) {
    var localTime = moment().utc(time).format('hh:mm A');
    return localTime;
  }
})
