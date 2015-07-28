TestCollection = new Meteor.Collection('test');

TestSchema = {
  details: {
    type: String
  }
};

StateMachine.defineStates(TestCollection, TestSchema, {
  states: ['accepted', 'rejected', 'hold' ],
  default: 'hold'
});

TestCollection.attachSchema(TestSchema);

describe('StateMachine', function() {
  beforeEach(function() {
    TestCollection.remove({});
  });

  it('defines an attribute called "state" on the schema', function() {
    var collection = {};
    var schema = {};

    StateMachine.defineStates(collection, schema, {
      states: ['accepted', 'hold'],
      default: 'hold'
    });

    expect(schema.state).to.be.a('object');
  });

  it('defines the "to", "find" and "is" methods in the collection', function() {
    var collection = {};
    var schema = {};
    var states = ['accepted', 'hold'];

    StateMachine.defineStates(collection, schema, {
      states: states,
      default: 'hold'
    });

    _.each(states, function(state) {
      var capitalizedSateName = capitalize(state) + 'State';

      expect(collection['to' + capitalizedSateName]).to.be.a('function');
      expect(collection['is' + capitalizedSateName]).to.be.a('function');
      expect(collection['find' + capitalizedSateName]).to.be.a('function');
    });
  });

  describe('toStateName', function() {
    it('changes the state to "accepted"', function() {
      var instance = TestCollection.insert({
        state: 'hold',
        details: 'testing'
      });

      TestCollection.toAcceptedState(instance);

      expect(TestCollection.findOne(instance).state)
        .to.eq('accepted');
    });
  });

  describe('isStateName', function() {
    describe('with a full object as an argument', function() {
      it('checks if it is in the "accepted" state', function() {
        var instance = TestCollection.insert({
          details: 'testing'
        });

        TestCollection.toAcceptedState(instance);

        expect(TestCollection.isAcceptedState(instance))
          .to.be.true;
      });
    });

    describe('with a partial object as an argument', function() {
      it('checks if it is in the "accepted" state', function() {
        var instance = TestCollection.insert({
          details: 'testing'
        });

        TestCollection.toAcceptedState(instance);

        expect(TestCollection.isAcceptedState({ _id: instance }))
          .to.be.true;
      });
    });
  });

  describe('findStateName', function() {
    it('finds all the items in the "accepted" state', function() {
      TestCollection.insert({
        details: 'testing'
      });

      TestCollection.insert({
        details: 'testing',
        state: 'accepted'
      });

      var tests = TestCollection.findAcceptedState();

      expect(tests.count()).to.eq(1);
    });
  });

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }
});
