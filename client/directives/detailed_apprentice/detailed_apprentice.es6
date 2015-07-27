Template.DetailedApprentice.onCreated(function() {
  // allowed values are 'detailed' and 'weekly';
  this.selectedTab = new ReactiveVar('detailed');

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
  apprentice: function() {
    return Apprentices.findOne(FlowRouter.getParam('id'));
  },
  calendarOptions: function() {
    return {
      id: 'weeklyCalendar',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
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
  hasWeekly: function() {
    return Weekly.find({ apprenticeId: FlowRouter.getParam('id') }).count() != 0;
  },
  selectedTab: function(tab) {
    return Template.instance().selectedTab.get() == tab;
  },
  activeIfTab: function(tab) {
    if (Template.instance().selectedTab.get() == tab)
      return 'active';
  },
  mentorForWeekly: function() {
    return Meteor.users.findOne(this.mentorId);
  }
});

Template.DetailedApprentice.events({
  'click #tab-detailed': function(e, tpl) {
    tpl.selectedTab.set('detailed');
  },
  'click #tab-calendar': function(e, tpl) {
    tpl.selectedTab.set('calendar');
  },
});
