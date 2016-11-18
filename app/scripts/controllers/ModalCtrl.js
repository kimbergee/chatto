(function() {
  function ModalCtrl($scope, Room, $uibModalInstance) {

    $scope.create = function() {
      console.log('YAY! created new room');
      Room.addRoom($scope.newRoom);
      $uibModalInstance.close();
    };

    $scope.cancel = function() {
      console.log('cancelled creating room');
      $uibModalInstance.dismiss('cancel');
    };

  };

  angular
    .module('chatto')
    .controller('ModalCtrl', ['$scope', 'Room', '$uibModalInstance', ModalCtrl]);
})();
