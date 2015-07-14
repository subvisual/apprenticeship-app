angular
  .module('ap')
  .directive('navBar', navBar);

function navBar() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'client/componentes/nav_bar/nav_bar.ng.html'
  };
}
