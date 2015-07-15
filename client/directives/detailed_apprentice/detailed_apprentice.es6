Template.DetailedApprentice.onCreated(function() {
  this.autorun(() => {
    this.subscribe('apprentice', FlowRouter.getParam('id'));
    this.subscribe('weekly', FlowRouter.getParam('id'));
  });
});

Template.DetailedApprentice.helpers({
  apprentice: function() {
    return Apprentices.findOne(FlowRouter.getParam('id'));
  },
  weekly: function() {
    return Weekly.find({ apprenticeId: FlowRouter.getParam('id') });
  }
});
