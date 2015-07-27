Template.Apprentices.onCreated(function() {
  this.subscribe('apprentices');
});

Template.Apprentices.helpers({
  apprentices: function() {
    return Apprentices.find();
  }
});

Template.Apprentices.events({
  'click .card.apprentice': function(e, tpl) {
    e.preventDefault();
    FlowRouter.go(`/apprentices/${this._id}`);
  }
});
