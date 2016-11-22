(function() {
  function RoomsCtrl(RoomService, $uibModal) {

    var ctrl = this;
    ctrl.allRooms = RoomService.all;

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
    .controller('RoomsCtrl', ['RoomService', '$uibModal', RoomsCtrl]);
})();
