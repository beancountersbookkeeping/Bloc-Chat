(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    return {
       getByRoomID: function (roomId) {
           ref.orderByChild('roomID').equalTo('roomID').on('roomID',function(snapshot){
               console.log(snapshot.key);
           })
       },
        all: messages,
        create:function(name,newMessage,roomID){
            messages.$add({
				username: name,
				content: newMessage,
                sentAt: Firebase.ServerValue.TIMESTAMP,
                roomId: roomID

    });	
        
    
  

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();