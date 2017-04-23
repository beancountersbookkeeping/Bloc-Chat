(function(){
    function roomCtrl($scope, Room, $state, Message){
        $scope.rooms = Room.all;
        $scope.roomId = $state.params.roomId;
        $scope.currentRoom = Room.get($scope.roomId);

        $scope.messages = Message.getByRoomID($scope.roomId);
        
        $scope.newMessage = function (message){
            console.log(message);
            Message.create($scope.username, message, $scope.roomId);
        };
                                                   
        
    }
    angular
        .module('blocChat')
        .controller('roomCtrl', ['$scope','Room', '$state', 'Message', roomCtrl]);
    
}) ();