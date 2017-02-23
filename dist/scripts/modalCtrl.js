(function(){
    function modalCtrl(){
        $scope.rooms = Room.all;
      
        
    }
    angular
        .module('blocChat')
        .controller('modalCtrl', ['$scope', modalCtrl]);
    
}) ();