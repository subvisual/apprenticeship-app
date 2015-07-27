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

  // add semantic ui files from dist
  api.addFiles([
    'semantic-ui/semantic.min.css',
    'semantic-ui/semantic.min.js',
    'semantic-ui/themes/basic/assets/fonts/icons.eot',
    'semantic-ui/themes/basic/assets/fonts/icons.svg',
    'semantic-ui/themes/basic/assets/fonts/icons.ttf',
    'semantic-ui/themes/basic/assets/fonts/icons.woff',
    'semantic-ui/themes/default/assets/fonts/icons.eot',
    'semantic-ui/themes/default/assets/fonts/icons.svg',
    'semantic-ui/themes/default/assets/fonts/icons.ttf',
    'semantic-ui/themes/default/assets/fonts/icons.woff',
    'semantic-ui/themes/default/assets/fonts/icons.woff2',
    'semantic-ui/themes/default/assets/images/flags.png',
  ], 'client');
});
