Package.describe({
  name: 'gabrielpoca:state-machine',
  version: '0.0.0'
});

Package.onUse(function(api) {
  api.use([
    'underscore',
    'templating'
  ]);

  api.addFiles('state_machine.js');

  api.export('StateMachine');
});

Package.onTest(function(api) {
  api.use([
    'underscore',
    'aldeed:simple-schema@1.3.3',
    'aldeed:collection2@2.3.3',
    'mike:mocha-package@0.5.7',
    'practicalmeteor:chai@2.1.0_1',
    'practicalmeteor:sinon@1.14.1_2'
  ]);

  api.use('gabrielpoca:state-machine');

  api.addFiles([
    'state_machine_test.js'
  ], 'server');
});
