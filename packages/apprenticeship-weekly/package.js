Package.describe({
  name: 'apprenticeship:weekly',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('aldeed:collection2');
  api.use('grigio:babel');
  api.use('dburles:collection-helpers@1.0.3');

  api.addFiles('weekly.es6');
  api.addFiles('exports.js');

  api.export('Weekly');
  api.export('WeeklySchema');
});
