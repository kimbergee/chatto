(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    
    // for testing because there are no chat rooms yer
    // var rooms = ['Test Room 1', 'Test Room 2', 'Test Room 3'];

    return {
      all: rooms
    };
  }

  angular
    .module('chatto')
    .factory('Room', ['$firebaseArray', Room]);
})();
