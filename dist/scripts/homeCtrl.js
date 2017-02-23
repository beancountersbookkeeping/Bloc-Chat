(function(){
    function homeCtrl($scope, Room, $uibModal){
        $scope.rooms = Room.all;
        
        $scope.launchModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'templates/modal.html',
                controller: 'modalCtrl'
            });
        };

    }
    angular
        .module('blocChat')
        .controller('homeCtrl', ['$scope','Room', '$uibModal', homeCtrl]);
    
}) ();