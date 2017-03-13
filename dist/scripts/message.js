(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
       getByRoomID: function (roomId) {
          return $firebaseArray(ref.child(roomId));
       },
        all: messages,
        create: function(name, newMessage, roomID) {
            messages.$add({
				username: name,
				content: newMessage,
                sentAt: Firebase.ServerValue.TIMESTAMP,
                roomId: roomID
            });
        }
    }
  }
        
    
  

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();