Template.weeklyItem.events({
  'click .button.remove': function(e, tpl) {
    Meteor.call('removeWeekly', this._id);
  }
});
