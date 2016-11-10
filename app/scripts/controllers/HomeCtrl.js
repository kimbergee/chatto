(function() {
  function HomeCtrl($scope, Room){
    this.rooms = Room.all;

  };

  angular
    .module('chatto')
    .controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();
