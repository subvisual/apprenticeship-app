describe('Apprentices', function() {
  beforeEach(function() {
    Apprentices.remove({});
  });

  it('exists', function() {
    expect(Apprentices).to.be.an('object');
  });
});
