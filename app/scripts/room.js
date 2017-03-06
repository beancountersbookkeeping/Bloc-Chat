(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    
    function create(name) {
        var list = $firebaseArray(ref);
        return list.$add(name).then(function(ref) {
            console.log("added record with id " + name);
        });
        
    }
      

    return {
      all: rooms,
      create: create
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();