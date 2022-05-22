
var firebaseConfig = {
    apiKey: "AIzaSyAHMpkCrrIlkBa9954FujUFdGRuMopPqP8",
    authDomain: "kiwter-5ec60.firebaseapp.com",
    databaseURL: "https://kiwter-5ec60-default-rtdb.firebaseio.com",
    projectId: "kiwter-5ec60",
    storageBucket: "kiwter-5ec60.appspot.com",
    messagingSenderId: "186606772237",
    appId: "1:186606772237:web:b8f9cdf21b4946ce7cf544"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

  function addRoom(){
        room_name=document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
