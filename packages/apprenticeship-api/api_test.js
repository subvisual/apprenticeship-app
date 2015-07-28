Meteor.startup(function() {
  describe('Api', function() {
    beforeEach(function() {
      Applications.remove({});
    });

    afterEach(function() {
      spies.restoreAll();
    });

    it('creates a new application', function() {
      spies.create('ApplicationsInsert', Applications, 'insert');
      var data = {
        name: 'Justo',
        email: 'joaojusto@groupbuddiesl.com',
        phoneNumber: '913270091'
      };

      restul = HTTP.post(Meteor.absoluteUrl('api/applications'), {
        data: data
      });

      expect(spies.get('ApplicationsInsert')).to.have.been.called;
    });

    it('fails to create a applications when information is missing', function() {
      spies.create('ApplicationsInsert', Applications, 'insert');
      var data = {
        name: 'Justo',
        phoneNumber: '913270091'
      };

      restul = HTTP.post(Meteor.absoluteUrl('api/applications'), {
        data: data
      });

      expect(spies.get('ApplicationsInsert')).not.to.have.been.called;
    });
  });
});
