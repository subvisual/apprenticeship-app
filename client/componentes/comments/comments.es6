angular
  .module('ap')
  .directive('comments', comments);

function comments() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'client/componentes/comments/comments.ng.html'
  };
}
