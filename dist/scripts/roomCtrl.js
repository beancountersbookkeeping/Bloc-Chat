(function(){
    function roomCtrl($scope, Room, $state, Message, $cookies){
        $scope.rooms = Room.all;
        $scope.roomId = $state.params.roomId;
        $scope.currentRoom = Room.get($scope.roomId);

        $scope.messages = Message.getByRoomID($scope.roomId);
        
        $scope.newMessage = function (message){
            console.log(message);
            Message.create($cookies.get('blocChatCurrentUser'), message, $scope.roomId);
        };
                                                   
        
    }
    angular
        .module('blocChat')
        .controller('roomCtrl', ['$scope','Room', '$state', 'Message', '$cookies', roomCtrl]);
    
}) ();