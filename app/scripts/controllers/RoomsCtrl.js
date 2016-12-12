(function() {
  function RoomsCtrl($uibModal, RoomService, MessageService, $cookies) {

    var ctrl = this;
    ctrl.allRooms = RoomService.all;
    ctrl.currentUser = $cookies.get('blocChatCurrentUser');

    // open username modal before accessing rooms view
    var initialize = function() {
      if (!ctrl.currentUser || ctrl.currentUser === '') {
        $uibModal.open({
          templateUrl: '/templates/usernamemodal.html',
          controller: 'UsernameModalCtrl',
          controllerAs: 'usernamemodal',
          size: 'sm',
          backdrop: 'static',
          keyboard: false
        });
      }
      ctrl.displayPickName = "Pick a room from the left to start chatting in";
    };

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
      ctrl.displayPickName = "";
      ctrl.displayName = "(You are currently in the " + room.name + " room)";
    };

    ctrl.sendMsg = function(newMsg) {
      newMsg.username = ctrl.currentUser;
      newMsg.roomId = ctrl.currentRoom.$id;
      console.log(newMsg);
      MessageService.send(newMsg);
      console.log('YAY! new msg sent');
      newMsg.content = "";
    };

    initialize();
  }

  angular
    .module('chatto')
    .controller('RoomsCtrl', ['$uibModal', 'RoomService', 'MessageService', '$cookies', RoomsCtrl]);
})();
