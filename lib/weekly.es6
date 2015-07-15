Weekly = new Meteor.Collection('weekly');

WeeklySchema = {
  apprenticeId: {
    type: String
  },
  mentor: {
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
  insertWeekly: function(doc) {
    console.log(doc);
    if (!this.userId) throw 'Not logged in!';

    return Weekly.insert(doc);
  }
});
