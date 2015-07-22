Meteor.methods({
  acceptApplication: function(id) {
    Applications.toAcceptedState({ _id: id });

    var application = Applications.findOne(id);

    return Apprentices.insert({
      name: application.name,
      email: application.email,
      phoneNumber: application.phoneNumber,
      pictureUrl: application.pictureUrl,
      startedAt: new Date,
      endedAt: new Date + 7 * 10
    });
  },
  rejectApplication: function(id) {
    return Applications.toRejectedState({ _id: id });
  },
  deleteApplication: function(id) {
    return Applications.update(
      { _id: id },
      { $set: { deleted: true }}
    );
  },
  insertWeekly: function(doc) {
    if (!this.userId) throw 'Not logged in!';

    return Weekly.insert(doc);
  },
  updateWeekly: function(operation, weeklyId) {
    if (!this.userId) throw 'Not logged in!';

    return Weekly.update({ _id: weeklyId }, operation);
  },
  removeWeekly: function(id) {
    if (!this.userId) throw 'Not logged in!';

    return Weekly.remove({ _id: id });
  }
});
