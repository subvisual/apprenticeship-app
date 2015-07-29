TestCollection = new Meteor.Collection('test');
var testStates = ['accepted', 'rejected', 'hold' ];
var testDefaultState ='hold';

TestSchema = {
  details: {
    type: String
  }
};

StateMachine.defineStates(TestCollection, TestSchema, {
  states: testStates,
  default: testDefaultState
});

TestCollection.attachSchema(TestSchema);

describe('StateMachine', function() {
  beforeEach(function() {
    TestCollection.remove({});
  });

  it('defines an attribute "state" in the schema', function() {
    var collection = {};
    var schema = {};

    StateMachine.defineStates(collection, schema, {
      states: ['accepted', 'hold'],
      default: 'hold'
    });

    expect(schema.state).to.be.a('object');
  });

  it('defines a default state for the collection', function() {
    var collection = {};
    var schema = {};

    StateMachine.defineStates(collection, schema, {
      states: ['accepted', 'hold'],
      default: 'hold'
    });

    expect(schema.state.defaultValue).to.eq('hold');
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

  describe('toNameState()', function() {
    it('changes the state to "accepted"', function() {
      var id = TestCollection.insert({
        state: 'hold',
        details: 'testing'
      });

      TestCollection.toAcceptedState(id);

      expect(TestCollection.findOne({ _id: id }).state)
        .to.eq('accepted');
    });
  });

  describe('isNameState()', function() {
    it('checks if it is in the "accepted" state', function() {
      var id = TestCollection.insert({
        details: 'testing'
      });

      TestCollection.toAcceptedState({ _id: id });

      expect(TestCollection.isAcceptedState({ _id: id }))
        .to.be.true;
    });
  });

  describe('findStateName', function() {
    it('returns all the items in the "accepted" state', function() {
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
