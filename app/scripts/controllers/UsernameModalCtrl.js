(function() {
  function UsernameModalCtrl($scope, $uibModalInstance, $cookies) {

    $scope.createUsername = function() {
      if ($scope.username && $scope.username !== '') {
        $cookies.put('blocChatCurrentUser', $scope.username);
        $uibModalInstance.close();
        console.log('YAY! created new username ' + currentUser);
      } else {
        $scope.errorMsg = "Please enter a valid username";
      }
    };

  }

  angular
    .module('chatto')
    .controller('UsernameModalCtrl', ['$scope', '$uibModalInstance', '$cookies', UsernameModalCtrl]);
})();
