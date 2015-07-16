Package.describe({
  name: 'apprenticeship:applications',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('gabrielpoca:state-machine');
  api.use('aldeed:collection2');
  api.use('grigio:babel');

  api.addFiles('applications.js');
  api.addFiles('server_hooks.es6', 'server');

  api.export('Applications');
  api.export('ApplicationsSchema');
});
