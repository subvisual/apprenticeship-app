Package.describe({
  name: 'apprenticeship:apprentices',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('aldeed:collection2');

  api.addFiles('apprentices.js');

  api.export('Apprentices');
  api.export('ApprenticesSchema');
});

Package.onTest(function(api) {
  api.use([
    'mike:mocha-package@0.5.7',
    'practicalmeteor:chai@2.1.0_1'
  ]);

  api.use('apprenticeship:apprentices');

  api.addFiles([
    'apprentices_test.js'
  ], 'server');
});
