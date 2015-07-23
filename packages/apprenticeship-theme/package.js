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
  api.use('semantic:ui');
  api.use('iandouglas:accounts-ui-semantic-ui');
  api.use('fabienb4:autoform-semantic-ui');
});
