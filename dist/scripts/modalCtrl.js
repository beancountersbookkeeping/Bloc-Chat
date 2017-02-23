(function(){
    function modalCtrl($scope, $uibModalInstance){
        // var newRoom = {
        //     center
        // }
      
        $scope.cancel = function() {
            console.log('dismiss the modal');
        };
    }
    angular
        .module('blocChat')
        .controller('modalCtrl', ['$scope', '$uibModalInstance', modalCtrl]);
    
}) ();