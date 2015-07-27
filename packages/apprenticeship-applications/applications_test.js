describe('Applications', function() {
  beforeEach(function() {
    Applications.remove({});
    spies.restoreAll();
    Meteor.users.remove({});
  });

  it('exists', function() {
    expect(Applications).to.be.an('object');
  });

  Meteor.startup(function() {
    it('sends an email when an application is submited', function() {
      var emailSpy = sinon.spy(Email, 'send');

      Accounts.createUser({
        username: 'gabrielpoca',
        password: 'random',
        profile: {
          name: 'Gabriel',
          email: 'gabriel@subvisual.co',
        }
      });

      Applications.insert({
        name: 'Gabriel Poça',
        email: 'gabriel@subvisual.co',
        phoneNumber: 123123123
      });

      expect(emailSpy).to.have.been.called;
    });
  });
});
