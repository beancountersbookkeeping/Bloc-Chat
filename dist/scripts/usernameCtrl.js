(function(){
    function usernameCtrl($scope, $uibModalInstance, $cookies){
      $scope.okm = function() {
          $cookies.put('blocChatCurrentUser', $scope.username);
          $uibModalInstance.close($scope.username);
      };
       
        
    }
    angular
        .module('blocChat')
        .controller('usernameCtrl', ['$scope', '$uibModalInstance', '$cookies', usernameCtrl]);
    
}) ();