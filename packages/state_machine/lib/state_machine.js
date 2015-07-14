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
    var changeStateFn = function(obj) {
      return collection.update(obj, { $set: { state: state }}, function(err) {
        if (err) throw err;

        var changeStateCallback = collection['on' + capitalize(state) + 'State'];

        if (changeStateCallback)
          changeStateCallback(obj._id);
      });
    };

    collection['to' + capitalize(state) + 'State'] = changeStateFn;
    collection['find' + capitalize(state) + 'State'] = findForState(state);
    collection['is' + capitalize(state) + 'State'] = isState(state);
  });

  function findForState(state) {
    return function(params) {
      _.defaults(params, { state: state });
      console.log(params);
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
