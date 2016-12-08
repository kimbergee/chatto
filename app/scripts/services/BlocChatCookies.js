/*
(function() {
  function BlocChatCookies($cookies, $uibModal) {
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

  angular
    .module('chatto')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
*/
