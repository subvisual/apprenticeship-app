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
