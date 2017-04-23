(function(){
    function usernameCtrl($scope, $uibModalInstance){
      $scope.create = function() {
          $uibModalInstance.close($scope.username);
      };
        
        
    }
    angular
        .module('blocChat')
        .controller('usernameCtrl', ['$scope', '$uibModalInstance', usernameCtrl]);
    
}) ();