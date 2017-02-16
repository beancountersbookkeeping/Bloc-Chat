(function(){
    function homeCtrl(room){
        $scope.rooms = room.all;
        
    }
    angular
        .module('blocChat',[])
        .controller('homeCtrl', ['$scope','room', homeCtrl]);
    
}) ();