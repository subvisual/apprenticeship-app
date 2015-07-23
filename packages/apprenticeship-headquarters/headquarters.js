HeadquartersClient = Headquarters({
  clientID: Meteor.settings.headquarters.appId,
  clientSecret: Meteor.settings.headquarters.secret,
  type: 'clientCredentials'
});
