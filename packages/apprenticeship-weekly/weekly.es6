Weekly = new Meteor.Collection('weekly');

Weekly.helpers({
  hasMentor: function() {
    return !!this.mentorId;
  }
});

WeeklySchema = {
  apprenticeId: {
    type: String
  },
  weekNumber: {
    type: Number,
    label: 'Week number',
    unique: true,
    custom: function() {
      if (!Meteor.isClient || (Meteor.isClient && !this.isSet) || this.isUpdate)
        return true;

      var apprenticeId = this.field('apprenticeId').value;

      Meteor.call(
        'weekNotPlanned',
        apprenticeId,
        this.value,
        function(err, result) {
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
    optional: true,
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
    if (!this.userId) throw 'Not logged in!';

    var weekly = Weekly.find({
      apprenticeId: apprenticeId,
      weekNumber: weekNumber
    });

    return weekly.count() == 0;
  }
});
