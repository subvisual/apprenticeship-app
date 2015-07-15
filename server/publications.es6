Meteor.publish('applications', function(options = {}) {
  if (!this.userId) return;

  _.defaults(options, {
    showDeleted: false
  });

  var args = {};

  if (! options.showDeleted)
    args.deleted = false;

  return Applications.find(args);
});

Meteor.publish('apprentices', function() {
  if (!this.userId) return;

  return Apprentices.find({});
});


Meteor.publish('apprentice', function(id) {
  if (!this.userId) return;

  return Apprentices.find({ _id: id });
});

Meteor.publish('weekly', function(apprenticeId) {
  if (!this.userId) return;

  return Weekly.find({ apprenticeId: apprenticeId });
});

Meteor.publish('users', function() {
  if (!this.userId) return;

  return Meteor.users.find({});
});
