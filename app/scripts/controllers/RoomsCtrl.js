(function() {
  function RoomsCtrl(RoomService, MessageService, $uibModal) {

    var ctrl = this;
    ctrl.allRooms = RoomService.all;
    // ctrl.getByRoomId = MessageService.getByRoomId;
    // ctrl.currentRoom;
    // ctrl.messages;

    ctrl.open = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal',
        size: 'sm'
      });
    };

    ctrl.setCurrentRoom = function(room) {
      ctrl.currentRoom = room;
      ctrl.messages = MessageService.getByRoomId(room.$id);
      ctrl.displayName = "(You are currently in the " + room.name + " room)";
    };

  }

  angular
    .module('chatto')
    .controller('RoomsCtrl', ['RoomService', 'MessageService', '$uibModal', RoomsCtrl]);
})();
