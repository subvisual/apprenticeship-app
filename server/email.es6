if (Meteor.settings.email && Meteor.settings.email.username && Meteor.settings.email.username != "") {
  let username = Meteor.settings.email.username;
  let password = Meteor.settings.email.password;

  process.env.MAIL_URL = `smtp://${username}%40gmail.com:${password}@smtp.gmail.com:465/`;
}
