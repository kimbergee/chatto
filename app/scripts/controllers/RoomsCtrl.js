(function() {
  function RoomsCtrl($uibModal, RoomService, MessageService, $cookies) {

    var ctrl = this;
    ctrl.allRooms = RoomService.all;

    // open username modal before accessing rooms view
    var initialize = function() {
      var currentUser = $cookies.get('blocChatCurrentUser');
      if (!currentUser || currentUser === '') {
        $uibModal.open({
          templateUrl: '/templates/usernamemodal.html',
          controller: 'UsernameModalCtrl',
          controllerAs: 'usernamemodal',
          size: 'sm',
          backdrop: 'static',
          keyboard: false
        });
      };
    }

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

    initialize();
  }

  angular
    .module('chatto')
    .controller('RoomsCtrl', ['$uibModal', 'RoomService', 'MessageService', '$cookies', RoomsCtrl]);
})();
