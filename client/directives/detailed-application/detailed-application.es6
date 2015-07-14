angular
  .module('ap')
  .directive('detailedApplication', detailedApplication)
  .controller('DetailedApplicationCtrl', DetailedApplicationCtrl);

function detailedApplication() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'client/directives/detailed-application/detailed-application.ng.html',
    controllerAs: 'ctrl',
    controller: 'DetailedApplicationCtrl',
    bindToController: true
  };
}

function DetailedApplicationCtrl($stateParams) {
  var ctrl = this;
  console.log(this);
}
