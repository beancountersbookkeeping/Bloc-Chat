(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
     var list = $firebaseArray(ref);
        list.$add({ foo: "bar" }).then(function(ref) {
          console.log("added record with id " + Room.create);
    });

    return {
      all: rooms
        
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();