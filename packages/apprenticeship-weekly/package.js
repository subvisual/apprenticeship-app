Package.describe({
  name: 'apprenticeship:weekly',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('aldeed:autoform@4.0.0 || 5.0.0');
  api.use('accounts-base');
  api.use('aldeed:collection2@2.3.3');
  api.use('grigio:babel');
  api.use('dburles:collection-helpers@1.0.3');

  api.addFiles('weekly.es6');
  api.addFiles('exports.js');

  api.export('Weekly');
  api.export('WeeklySchema');
});

Package.onTest(function(api) {
  api.use([
    'mike:mocha-package@0.5.7',
    'practicalmeteor:chai@2.1.0_1'
  ]);

  api.use('apprenticeship:weekly');

  api.addFiles([
    'weekly_test.js'
  ], 'server');
});
