Package.describe({
  name: 'apprenticeship:applications',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('email');
  api.use('accounts-base');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');
  api.use('matb33:collection-hooks@0.7.5');
  api.use('gabrielpoca:state-machine');
  api.use('aldeed:collection2');
  api.use('grigio:babel');

  api.imply(['email', 'accounts-base']);

  api.addFiles('applications.js');
  api.addFiles('server_hooks.es6', 'server');

  api.export('Applications');
  api.export('ApplicationsSchema');
});

Package.onTest(function(api) {
  api.use([
    'mike:mocha-package@0.5.7',
    'practicalmeteor:chai@2.1.0_1',
    'practicalmeteor:sinon@1.14.1_2'
  ]);

  // I'm including this package to be able to create accounts manually.
  // I wouldn't be able to test because of the headquarters integrations,
  // unless I had a fake server.
  api.use('accounts-password');
  api.use('apprenticeship:applications');

  api.addFiles([
    'applications_test.js'
  ], 'server');
});
