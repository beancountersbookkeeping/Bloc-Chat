(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    var createRoom = function(name) {
        return rooms.$add({name: name}).then(function(ref) {
        });
    };

    var getRoom = function(id) {
      return rooms.$getRecord(id);
    };

    return {
      all: rooms,
      create: createRoom,
      get: getRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

