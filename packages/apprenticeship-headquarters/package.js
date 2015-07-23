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

  api.addFiles('headquarters.js');

  api.export('HeadquartersClient');
});
