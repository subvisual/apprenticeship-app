Template.DetailedApprentice.onCreated(function() {
  this.autorun(() => {
    this.subscribe('users');
    this.subscribe('apprentice', FlowRouter.getParam('id'));
    this.subscribe('weekly', FlowRouter.getParam('id'));
  });
});

Template.DetailedApprentice.onRendered(function() {
  this.autorun(() => {
    Weekly.find();
    $('#weeklyCalendar').fullCalendar('refetchEvents');
  });
});

Template.DetailedApprentice.helpers({
  calendarOptions: function() {
    return {
      id: 'weeklyCalendar',
      events: function(start, end, timezone, callback) {
        var weekly = Weekly.find({ apprenticeId: FlowRouter.getParam('id') });

        var events = _.map(weekly.fetch(), (weekly) => {
          var mentorName = 'Mentor not assigned';
          var mentor = Meteor.users.findOne({ _id: weekly.mentorId });

          if (mentor)
            mentorName = mentor.profile.name;

          return {
            title: `Week ${weekly.weekNumber}: ${mentorName}`,
            start: moment(weekly.startedAt).format('YYYY-MM-DD'),
            end: moment(weekly.startedAt).add('days', 7).format('YYYY-MM-DD')
          };
        });

        callback(events);
      }
    };
  },
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
  usernameForId: function(id) {
    var user = Meteor.users.findOne(id);

    if (user)
      return user.profile.name;
    else
      return 'No mentor assigned';
  },
  prettyDate: function(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  },
});

Template.DetailedApprentice.events({
  'click .button.remove': function(e, tpl) {
    Meteor.call('removeWeekly', this._id);
  }
});
