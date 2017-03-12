(function(){
    function roomCtrl($scope, Room, $state, Message){
        $scope.rooms = Room.all;
        $scope.test = "Room Show Page!";
        $scope.roomId = $state.params.roomId;
        $scope.name = $state.params.name;

        $scope.messages = Message.getByRoomID($scope.roomId);
    }
    angular
        .module('blocChat')
        .controller('roomCtrl', ['$scope','Room', '$state', 'Message', roomCtrl]);
    
}) ();