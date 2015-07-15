Template.DetailedApprentice.onRendered(function() {
});

Template.DetailedApprentice.onCreated(function() {
  this.autorun(() => {
    this.subscribe('apprentice', FlowRouter.getParam('id'));
  });
});

Template.DetailedApprentice.helpers({
  apprentice: function() {
    return Apprentices.findOne(FlowRouter.getParam('id'));
  }
});
