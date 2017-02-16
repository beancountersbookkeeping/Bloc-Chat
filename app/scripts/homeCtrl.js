(function(){
    function homeCtrl($scope, Room){
        $scope.rooms = Room.all;
        
    }
    angular
        .module('blocChat')
        .controller('homeCtrl', ['$scope','Room', homeCtrl]);
    
}) ();