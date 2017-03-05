(function(){
    function modalCtrl($scope, $uibModalInstance){
       
        
       $scope.add = function () {
            Room.create($scope.newRoom);
        };
        
        $scope.ok = function () {
            $uibModalInstance.close('ok');
        };
      
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
        
        
    }
    angular
        .module('blocChat')
        .controller('modalCtrl', ['$scope', '$uibModalInstance', modalCtrl]);
    
}) ();