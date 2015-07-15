AutoForm.hooks({
  weeklyInsert: {
    before: {
      method: function(doc) {
        doc.apprenticeId = FlowRouter.getParam('id');
        return doc;
      }
    },
    after: {
      method: function(err, doc) {
        if (!err)
          Session.set('newWeeklyOpen', false);
      }
    }
  }
});

Template.newWeekly.events({
  'click #new_weekly_open': function(e, tpl) {
    Session.set('newWeeklyOpen', true);
  },
  'click .ui.deny.button': function(e, tpl) {
    Session.set('newWeeklyOpen', false);
  },
  'click .close.icon': function(e, tpl) {
    Session.set('newWeeklyOpen', false);
  }
});

Template.newWeekly.helpers({
  modalState: function() {
    if (Session.get('newWeeklyOpen'))
      return 'open';
  }
});
