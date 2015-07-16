Applications.after.insert(function(userId, application) {
  _.each(Meteor.users.find({}).fetch(), function(user) {
    Email.send({
      to: user.profile.email,
      subject: 'New application',
      text: `There is a new application by ${application.name}`
    });
  });

  return application;
});
