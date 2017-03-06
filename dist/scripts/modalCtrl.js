(function(){
    function modalCtrl($scope, $uibModalInstance, Room){
        
        $scope.ok = function () {
             Room.create($scope.newRoom);
            $uibModalInstance.close('ok');
        };
      
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
        
        
    }
    angular
        .module('blocChat')
        .controller('modalCtrl', ['$scope', '$uibModalInstance', 'Room', modalCtrl]);
    
}) ();