angular
  .module('ap')
  .filter('prettyPhoneNumber', function() {
    return function(input) {
      return (input + '').match(/.{1,3}/g).join(' ');
    };
  });
