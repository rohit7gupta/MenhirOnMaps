
var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyA7rpbasdAUajN3dBCzmqI7MB4_p8Z1LcU",
    authDomain: "menhirmaps.firebaseapp.com",
    databaseURL: "https://menhirmaps.firebaseio.com",
    projectId: "menhirmaps",
    storageBucket: "menhirmaps.appspot.com",
    messagingSenderId: "260331680445"
  };
  firebase.initializeApp(config);

  

  var message={
      title: "test2", sDesc : "This is a short description",lDesc : "This is a looonnnnger description",
      lat : 40.8823,long : -3.765
  };

  var ref = firebase.database().ref().child("Italy");
  var titleRef= ref.child("title");
  var sDescRef= ref.child("sDesc");
  var latRef= ref.child("lat");
  var longRef= ref.child("long");
  var lDescRef= ref.child("lDesc");


//  var messageRef= ref.push(message);
//  console.log(messageRef.key);


//Upload as an update function
// var payload = 
// {
//      "name": "gustav ",
//         "age": "24"
// };
// ref.child(messageRef.key).update(payload);

  ref.orderByKey().limitToLast(1).on('child_added',function(snap){  //fetch last record when child added
    console.log(snap.val());
  });
  ref.on("child_removed",function(snap){ 
    console.log("Removed Fired", snap.val());
   });
   ref.on("child_changed",function(snap){ 
    console.log("changed fired", snap.val());
   });
  ref.on("value",function(snap){     //fires when anything happens
   console.log("value", snap.val());
  });

  ref.orderByChild("name").equalTo("Farrel").on("value", function(snapshot) {
    console.log("Search",snapshot.val());
  });
  ref.orderByChild("name").startAt("F").endAt("b\uf8ff").limitToFirst(2).on("child_added", function(snapshot) {
    console.log("Search by List",snapshot.val());
  });


