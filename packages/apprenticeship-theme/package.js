Package.describe({
  name: 'apprenticeship:theme',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('templating', 'client');
  api.use('fabienb4:autoform-semantic-ui@0.4.4', 'client');

  api.addFiles('theme.html', 'client');
  api.addFiles('theme.js', 'client');
});
