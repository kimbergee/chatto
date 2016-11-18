(function() {
  function HomeCtrl(Room, $uibModal) {

    var ctrl = this;
    ctrl.allRooms = Room.all;

    ctrl.open = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal',
        size: 'sm'
      });
    };

  }

  angular
    .module('chatto')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
