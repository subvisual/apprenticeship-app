if (Meteor.settings.email) {
  let username = Meteor.settings.email.username;
  let password = Meteor.settings.email.password;

  process.env.MAIL_URL = `smtp://${username}%40gmail.com:${password}@smtp.gmail.com:465/`;
}
