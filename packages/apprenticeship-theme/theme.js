Template.menuLogoutButton.events({
  'click': function() {
    Meteor.logout();
  }
});


Template.customLogin.events({
  'click button': function() {
    var serviceName = 'headquarters';

    var options = {};
    if (Accounts.ui._options.requestPermissions[serviceName])
      options.requestPermissions = Accounts.ui._options.requestPermissions[serviceName];
    if (Accounts.ui._options.requestOfflineToken[serviceName])
      options.requestOfflineToken = Accounts.ui._options.requestOfflineToken[serviceName];
    if (Accounts.ui._options.forceApprovalPrompt[serviceName])
      options.forceApprovalPrompt = Accounts.ui._options.forceApprovalPrompt[serviceName];

    Meteor.loginWithHeadquarters(options, function (err) {
      console.log('here');
    });
  }
});
