var firebaseConfig = {
  apiKey: "AIzaSyDE3iSzdgMVGruFIcC-TnsMs1Mj8IUjJMU",
  authDomain: "quizappfmp.firebaseapp.com",
  databaseURL: "https://quizappfmp-default-rtdb.firebaseio.com",
  projectId: "quizappfmp",
  storageBucket: "quizappfmp.appspot.com",
  messagingSenderId: "996408454949",
  appId: "1:996408454949:web:f54a59bcff0625d46234cc"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);


function getDetails(){
       var email = document.getElementById("email");
       var password = document.getElementById("password");

       var detailsObj = {
        email:email.value,
        password:password.value
       }
       var key = Math.random() * 325136136;

       firebase
         .database()
         .ref("hasan/users/" + Math.round(key))
         .set(detailsObj);
         
         
} 
  function getDataFromFirebase() {
    firebase
      .database()
      .ref("hasan/users")
      .on("child_added", function (data) {
        console.log(data.val());
      });
  }
  getDataFromFirebase();

  var loginButton = document.getElementById("loginButton")
  loginButton.addEventListener("click", function() {
  var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (!email || !password) {
        alert("Please fill in all the fields");
    } else {
    window.location.href = "Quiz.html";
    }
});
