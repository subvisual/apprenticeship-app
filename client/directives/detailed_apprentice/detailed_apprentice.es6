Template.DetailedApprentice.onCreated(function() {
  this.autorun(() => {
    this.subscribe('users');
    this.subscribe('apprentice', FlowRouter.getParam('id'));
    this.subscribe('weekly', FlowRouter.getParam('id'));
  });
});

Template.DetailedApprentice.helpers({
  defaultDoc: function() {
    return {
      apprenticeId: FlowRouter.getParam('id')
    };
  },
  weekly: function() {
    return Weekly.find(
      { apprenticeId: FlowRouter.getParam('id') },
      { sort: { weekNumber: 1 }}
    );
  },
  userNameForId: function(id) {
    var user = Meteor.users.findOne(id);

    if (user)
      return user.profile.name;
  }
});

Template.DetailedApprentice.events({
  'click .button.remove': function(e, tpl) {
    Meteor.call('removeWeekly', this._id);
  }
});
