Package.describe({
  name: 'apprenticeship:api',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'nimble:restivus',
    'apprenticeship:applications',
    'jparker:gravatar',
    'grigio:babel'
  ]);

  api.imply('apprenticeship:applications');

  api.addFiles('api.es6', 'server');
});

Package.onTest(function(api) {
  api.use([
    'http',
    'apprenticeship:api',
    'mike:mocha-package@0.5.7',
    'practicalmeteor:chai@2.1.0_1',
    'practicalmeteor:sinon@1.14.1_2'
  ]);

  api.addFiles('api_test.js', 'server');
});
