SyncedCron.config({
  log: true,
});

SyncedCron.add({
  name: 'Check if there aren\' any mentors missing.',
  schedule: function(parser) {
    return parser.text('every 2 hours');
  },
  job: function() {
    _.each(Weekly.find({}).fetch(), function(weekly) {
      var dateIn7Days = moment(new Date()).add('days', 7);
      var weeklyDate = moment(weekly.startedAt);

      if (dateIn7Days.isAfter(weeklyDate) && !weekly.mentorId) {
        _.each(Meteor.users.find({}).fetch(), function(user) {
          HeadquartersClient.email.send({
            to: user.profile.email,
            subject: `No mentor for week ${weekly.weekNumber}`,
            body: `There is no mentor assigned to week ${weekly.weekNumber}.`
          });
        });
      }
    });
  }
});

SyncedCron.start();
