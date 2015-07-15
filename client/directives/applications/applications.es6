Template.Applications.onCreated(function() {
  this.showDeleted = new ReactiveVar(false);
  this.showAll = new ReactiveVar(false);

  this.autorun(() => {
    var args = {
      showDeleted: Template.instance().showDeleted.get()
    };

    console.log(args);

    this.subscribe('applications', args);
  });
});

Template.Applications.helpers({
  applications: function() {
    if (Template.instance().showAll.get())
      return Applications.find();
    else
      return Applications.findHoldState();
  },
  pictureForApplication: function(application) {
    return application.pictureUrl || 'http://placehold.it/200x200';
  },
  prettyDate: function(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  },
  applicationExtraClass: function(application) {
    if (application.deleted)
      return 'disabled';
  }
});

Template.Applications.events({
  'click #show_all': function(e, tpl) {
    tpl.showAll.set(!tpl.showAll.get());
  },
  'click #show_deleted': function(e, tpl) {
    tpl.showDeleted.set(!tpl.showDeleted.get());
  },
  'click .application.accept': function(e, tpl) {
    Meteor.call('acceptApplication', this._id);
  },
  'click .application.reject': function(e, tpl) {
    Meteor.call('rejectApplication', this._id);
  },
  'click .application.delete': function(e, tpl) {
    Metoer.call('deleteApplication', this._id);
  }
});
