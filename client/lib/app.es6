angular
  .module('ap', ['angular-meteor', 'ui.router'])
  .config(Router);

function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('applicationsShow', {
      url: '/applications/:applicationId',
      template: '<detailed-application/></detailed-application/>'
    })
    .state('applications', {
      url: '/applications',
      template: '<applications></applications>'
    });

  $urlRouterProvider.otherwise('/applications');
}
