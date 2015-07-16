Package.describe({
  name: 'apprenticeship:weekly',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.addFiles('weekly.js');

  api.export('Weekly');
  api.export('WeeklySchema');
});
