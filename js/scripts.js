const firebaseConfig = {
  apiKey: "AIzaSyBE9TzLvkTyM-EptQc3c2Ane2g8RL3-MVU",
  authDomain: "hstk-8f4d7.firebaseapp.com",
  databaseURL: "https://hstk-8f4d7-default-rtdb.firebaseio.com",
  projectId: "hstk-8f4d7",
  storageBucket: "hstk-8f4d7.appspot.com",
  messagingSenderId: "526012939431",
  appId: "1:526012939431:web:04eb4c753fd12c7c756f82",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var outputCloth = "";

//Make stuff easy
const database = firebase.database();

function fetchAllData(option) {
  category = option;
  console.log(option);
  document.getElementById("output").innerHTML = "";
  firebase
    .database()
    .ref("HTML/" + option)
    .once("value", function (snapshot) {
      snapshot.forEach(function (ChildSnapshot) {
        let code = ChildSnapshot.val().code;
        let description = ChildSnapshot.val().description;
        let name = ChildSnapshot.val().name;
        let url = ChildSnapshot.val().url;
        outputCloth =
          '<div class="col mb-5"> <div class="card h-100"> <img class="card-img-top" src="' +
          url +
          '"/> <div class="card-body p-4"> <div class="text-center"> <h5 class="fw-bolder">' +
          name +
          '</h5> <button class="btn btn-success" id="' +
          code +
          '" onclick="viewItem(this.id)">View Item</button> <br/>' +
          description +
          '</div> </div> <div class="card-footer p-4 pt-0 border-top-0 bg-transparent"></div> </div> </div>';
        console.log(outputCloth);
        document.getElementById("output").innerHTML += outputCloth;
      });
    });
}

function viewItem(idOfItem) {
  console.log(idOfItem);
  console.log(category)
  localStorage.setItem("category", category);
  localStorage.setItem("itemName", idOfItem)
  console.log(localStorage.getItem("option"))
  const itemName = idOfItem;
  window.value = [itemName, category];
  console.log("Done");
  setTimeout(()=>{
    window.location = "viewItem.html";
  }, 300)
}
