angular
  .module('ap', ['angular-meteor', 'ui.router'])
  .config(Router);

function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/applications');

  $stateProvider
    .state('application', {
      url: '/applications',
      template: '<applications></applications>'
    })
    .state('show.applications', {
      url: '/applications/:id',
      template: '<applications></applications>'
    });
}
