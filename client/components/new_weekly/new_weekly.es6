AutoForm.hooks({
  weeklyInsert: {
    after: {
      method: function(err, doc) {
        if (!err)
          Session.set('newWeeklyOpen', false);
      },
      'method-update': function(err, doc) {
        if (!err)
          Session.set('newWeeklyOpen', false);
      }
    }
  }
});

Template.newWeekly.onCreated(function() {
  Session.set('newWeeklyOpen', false);
  this.modalOpen = new ReactiveVar(false);

  this.autorun(() => {
    var globalState = Session.get('newWeeklyOpen');

    if (globalState == false)
      this.modalOpen.set(false);
  });
});

Template.newWeekly.events({
  'click #new_weekly_open': function(e, tpl) {
    tpl.modalOpen.set(true);
    Session.set('newWeeklyOpen', true);
  },
  'click .ui.deny.button': function(e, tpl) {
    tpl.modalOpen.set(false);
    Session.set('newWeeklyOpen', false);
  },
  'click .close.icon': function(e, tpl) {
    tpl.modalOpen.set(false);
    Session.set('newWeeklyOpen', false);
  }
});

Template.newWeekly.helpers({
  modalState: function() {
    if (Template.instance().modalOpen.get())
      return 'open';
  },
  modalOpen: function() {
    return Template.instance().modalOpen.get();
  },
  doc: function() {
    return Template.instance().data.doc;
  },
  autoFormType: function() {
    if (!!Template.instance().data.doc._id)
      return 'method-update';
    else
      return 'method';
  },
  autoFormMethod: function() {
    if (!!Template.instance().data.doc._id)
      return 'updateWeekly';
    else
      return 'insertWeekly';
  }
});
