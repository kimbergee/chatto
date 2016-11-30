(function() {
  function RoomModalCtrl($scope, RoomService, $uibModalInstance) {

    $scope.create = function() {
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
    .controller('RoomModalCtrl', ['$scope', 'RoomService', '$uibModalInstance', RoomModalCtrl]);
})();
