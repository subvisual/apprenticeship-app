Template.Apprentices.onCreated(function() {
  this.subscribe('apprentices');
});

Template.Apprentices.helpers({
  apprentices: function() {
    return Apprentices.find();
  },
  prettyDate: function(date) {
    return moment(date).format('DD/MM/YYYY');
  }
});
