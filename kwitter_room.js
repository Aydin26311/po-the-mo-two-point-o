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
document.getElementById("username").innerHTML="Welcome "+user_name;
function add_room(){
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"hello Aydin"
    });
    localStorage.setItem("room_name",room_name);
    window.location="letschatpage.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room_name"+room_name);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    
}