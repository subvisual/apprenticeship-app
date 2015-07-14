angular
  .module('ap')
  .directive('applications', applications)
  .controller('ApplicationsCtrl', ApplicationsCtrl);

function applications() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'client/directives/applications/applications.ng.html',
    controllerAs: 'ctrl',
    controller: 'ApplicationsCtrl',
    bindToController: true
  };
}

function ApplicationsCtrl($meteor) {
  console.log(this);
  let ctrl = this;
  var applicationsHandler = false;

  ctrl.showDeleted = false;
  ctrl.toggleDeleted = toggleDeleted;

  ctrl.remove = remove;
  ctrl.accept = accept;
  ctrl.reject = reject;

  ctrl.isAccepted = isAccepted;
  ctrl.isHold = isHold;
  ctrl.isRejected = isRejected;
  ctrl.pictureForApplication = pictureForApplication;

  subscribeApplications(ctrl.showDeleted);

  function remove(application) {
    Meteor.call('deleteApplication', application._id);
  }

  function accept(application) {
    Meteor.call('acceptApplication', application._id);
  }

  function reject(application) {
    Meteor.call('rejectApplication', application._id);
  }

  function toggleDeleted() {
    subscribeApplications(ctrl.showDeleted);
  }

  function isHold(application) {
    return Applications.isHoldState(application);
  }

  function isAccepted(application) {
    return Applications.isAcceptedState(application);
  }

  function isRejected(application) {
    return Applications.isRejectedState(application);
  }

  function pictureForApplication(application) {
    return application.pictureUrl || 'http://placehold.it/200x200';
  }

  function subscribeApplications(showDeleted = false) {
    if (applicationsHandler)
      applicationsHandler.stop();

    $meteor.subscribe('applications', {
      showDeleted: showDeleted
    })
      .then(function(handler) {
        ctrl.applications = $meteor.collection(Applications);
        applicationsHandler = handler;
      });
  }
}
