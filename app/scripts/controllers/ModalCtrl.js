(function() {
  function ModalCtrl($scope, RoomService, $uibModalInstance) {

    $scope.create = function() {
      console.log('YAY! created new room');
      RoomService.addRoom($scope.newRoom);
      $uibModalInstance.close();
    };

    $scope.cancel = function() {
      console.log('cancelled creating room');
      $uibModalInstance.dismiss('cancel');
    };

  };

  angular
    .module('chatto')
    .controller('ModalCtrl', ['$scope', 'RoomService', '$uibModalInstance', ModalCtrl]);
})();
