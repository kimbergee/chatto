(function() {
  function RoomsCtrl($uibModal, RoomService, MessageService) {

    var ctrl = this;
    ctrl.allRooms = RoomService.all;
    // ctrl.getByRoomId = MessageService.getByRoomId;
    // ctrl.currentRoom;
    // ctrl.messages;

    ctrl.open = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '/templates/roommodal.html',
        controller: 'RoomModalCtrl',
        controllerAs: 'roommodal',
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
    .controller('RoomsCtrl', ['$uibModal', 'RoomService', 'MessageService', RoomsCtrl]);
})();
