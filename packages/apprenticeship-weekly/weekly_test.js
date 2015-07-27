describe('Weekly', function() {
  beforeEach(function() {
    Weekly.remove({});
  });

  it('exists', function() {
    expect(Weekly).to.be.an('object');
  });

  describe('weekNotPlanned', function() {
    it('is true when there isn\'t a week for that number', function(done) {
      var apprenticeId = 1;
      var weekNumber = 1;

      Meteor.call('weekNotPlanned', apprenticeId, weekNumber, function(err, res) {
        expect(res).to.be.true;
        done();
      });
    });

    it('is false when there already is week planning', function(done) {
      var apprenticeId = 'id';
      var weekNumber = 1;

      var weekly = Weekly.insert({
        apprenticeId: apprenticeId,
        weekNumber: weekNumber,
        mentorId: 1,
        startedAt: new Date(),
        details: 'Some details'
      });

      Meteor.call('weekNotPlanned', apprenticeId, weekNumber, function(err, res) {
        expect(res).to.be.false;
        done();
      });
    });
  });
});
