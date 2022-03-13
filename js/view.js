function updateValue() {
  firebase
    .database()
    .ref(
      "HTML/" +
        localStorage.getItem("category") +
        "/" +
        localStorage.getItem("itemName")
    )
    .on("value", function (snapshot) {
      console.log("Timer Time");
      var data = snapshot.val();
      console.log(data);
      View_Cart_description = data.description;
      View_Cart_name = data.name;
      View_Cart_code = data.code;
      View_Cart_url = data.url;
      document.getElementById("image").src = View_Cart_url;
      document.getElementById("name").innerHTML = View_Cart_name;
      document.getElementById("decp").innerHTML = View_Cart_description;
      document.getElementById("code").innerHTML = "Code-" + View_Cart_code;
      document.getElementById("code-raw").innerHTML = View_Cart_code;
      console.log("Done");
    });
}


function orderNow(){
  if(!document.getElementById("emailInputStart").value=="" || !document.getElementById("emailInputEnd").value==""){
    firebase.database().ref("EMAIL/"+document.getElementById("emailInputStart").value).set({
      emailStart: document.getElementById("emailInputStart").value,
      emailEnd: document.getElementById("emailInputEnd").value
    })
    firebase.database().ref("DELIVERY/emailDelivery").push({
      emailStart: document.getElementById("emailInputStart").value,
      emailEnd:document.getElementById("emailInputEnd").value,
      code: document.getElementById("code-raw").innerHTML,
      time: Date()
    })
    document.getElementById("closeIt").click()
  }
}