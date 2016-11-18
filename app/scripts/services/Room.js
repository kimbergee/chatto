(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    return {
      all: rooms,
      addRoom: function(room) {
        rooms.$add(room);
      }
    };
  }

  angular
    .module('chatto')
    .factory('Room', ['$firebaseArray', Room]);
})();
