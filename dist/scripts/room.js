(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    var createRoom = function(name) {
        return rooms.$add({name: name}).then(function(ref) {
            
            // var id = ref.key();
            // console.log("added record with id " + id);
            // return rooms.$indexFor(id); // returns location in the array
        });
    }

    return {
      all: rooms,
      create: createRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

