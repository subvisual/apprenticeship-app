Weekly = new Meteor.Collection('weekly');

WeeklySchema = {
  apprenticeId: {
    type: String
  },
  weekNumber: {
    type: Number,
    label: 'Week number',
    unique: true,
    custom: function() {
      if (!Meteor.isClient || (Meteor.isClient && !this.isSet))
        return;

      var apprenticeId = this.field('apprenticeId').value;

      Meteor.call(
        'weekNotPlanned',
        apprenticeId,
        this.value,
        (err, result) => {
          if (err || !result) {
            Weekly.simpleSchema()
              .namedContext('weeklyInsert')
              .addInvalidKeys([{
                name: 'weekNumber',
                type: 'notUnique'
              }]);
          }
        });
    }
  },
  mentorId: {
    type: String,
    label: 'Mentor',
    autoform: {
      options: function() {
        return Meteor.users.find().map(function(user) {
          return {
            label: user.profile.name,
            value: user._id
          };
        });
      }
    }
  },
  startedAt: {
    type: Date,
    label: 'Beginning date'
  },
  details: {
    type: String,
    label: 'Details',
    autoform: {
      rows: 8
    }
  }
};

Weekly.attachSchema(WeeklySchema);

Meteor.methods({
  weekNotPlanned: function(apprenticeId, weekNumber) {
    var weekly = Weekly.find({
      apprenticeId: apprenticeId,
      weekNumber: weekNumber
    });

    return weekly.count() == 0;
  }
});
