StateMachine = {};

StateMachine.defineStates = function(collection, schema, options) {
  var states = options.states;

  _.extend(schema, {
    state: {
      type: String,
      label: 'State',
      defaultValue: options.default,
      allowedValues: states
    }
  });

  _.each(states, function(state) {
    var capitalizedSateName = capitalize(state) + 'State';

    var changeStateFn = function(obj) {
      return collection.update(obj, { $set: { state: state }}, function(err) {
        if (err) throw err;

        var changeStateCallback = collection['on' + capitalizedSateName];

        if (changeStateCallback)
          changeStateCallback(obj._id);
      });
    };

    collection['to' + capitalizedSateName] = changeStateFn;
    collection['find' + capitalizedSateName] = findForState(state);
    collection['is' + capitalizedSateName] = isState(state);

    if (Meteor.isClient) {
      Template.registerHelper('is' + capitalizedSateName, function(application) {
        return application.state === state;
      });
    }
  });

  function findForState(state) {
    return function(params) {
      params = params || {};
      _.defaults(params, { state: state });
      return collection.find(params);
    };
  }

  function isState(state) {
    return function(obj) {
      return obj.state === state;
    };
  }
};

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}
