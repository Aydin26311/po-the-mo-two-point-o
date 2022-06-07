const firebaseConfig = {
    apiKey: "AIzaSyBicIU228dGNggXBr5b6RvuG-sZJtMQFyk",
    authDomain: "chatt-68e1c.firebaseapp.com",
    databaseURL: "https://chatt-68e1c-default-rtdb.firebaseio.com",
    projectId: "chatt-68e1c",
    storageBucket: "chatt-68e1c.appspot.com",
    messagingSenderId: "127028985481",
    appId: "1:127028985481:web:67686cc2cdd3a991e41058"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("username");
room_name=localStorage.getItem("room_name");
function send(){
    mst= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:mst,
          like:0
    });
    document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location="index.html";
}