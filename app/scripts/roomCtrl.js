(function(){
    function roomCtrl($scope, Room, $state, Message){
        $scope.rooms = Room.all;
        $scope.roomId = $state.params.roomId;
        $scope.currentRoom = Room.get($scope.roomId);

        $scope.messages = Message.getByRoomID($scope.roomId);
        
        $scope.newMessage = function (){
                console.log($scope.submittedmessage);
        };
                                                   
        
    }
    angular
        .module('blocChat')
        .controller('roomCtrl', ['$scope','Room', '$state', 'Message', roomCtrl]);
    
}) ();