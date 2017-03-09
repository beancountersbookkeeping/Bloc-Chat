(function(){
    function roomCtrl($scope, Room, $state, Message){
        // $scope.rooms = Room.all;
        $scope.test = "Room Show Page!";
        $scope.roomId = $state.params.roomId;

        $scope.messages = Message.getByRoomID($scope.roomId);
    }
    angular
        .module('blocChat')
        .controller('roomCtrl', ['$scope','Room', '$state', 'Message', roomCtrl]);
    
}) ();