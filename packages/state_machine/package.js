Package.describe({
  name: 'gabrielpoca:state-machine',
  version: '0.0.0'
});

Package.onUse(function(api) {
  api.use('underscore');
  api.use('templating');

  api.addFiles('state_machine.js');

  api.export('StateMachine');
});
