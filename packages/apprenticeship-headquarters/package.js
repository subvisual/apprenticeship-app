Package.describe({
  name: 'apprenticeship:headquarters',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('gabrielpoca:headquarters');

  api.addFiles('headquarters.js', ['server']);

  api.export('HeadquartersClient');
});

Package.onTest(function(api) {
  api.use([
    'mike:mocha-package@0.5.7',
    'practicalmeteor:chai@2.1.0_1'
  ]);

  api.use('apprenticeship:headquarters');

  api.addFiles([
    'headquarters_test.js'
  ], 'server');
});
