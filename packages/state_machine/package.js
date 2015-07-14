Package.describe({
  name: 'gabrielpoca:state-machine',
  version: '0.0.0'
});

Package.onUse(function(api) {
  api.use('underscore');

  api.addFiles('lib/state_machine.js');

  api.export('StateMachine');
});
