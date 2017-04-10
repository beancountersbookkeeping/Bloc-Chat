(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
       getByRoomID: function (roomId) {
          return $firebaseArray(ref.child(roomId));
       },
        all: messages,
        create: function(name, newMessage, roomId) {
            messages.$add({
				username: name,
				content: newMessage,
                sentAt: firebase.database.ServerValue.TIMESTAMP,
                roomId: roomId
            });
        }
    }
  }
        
    
  

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();