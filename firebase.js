const firebaseConfig = {
    apiKey: "AIzaSyCTx9z_aQny9b6cf0sWEX-vsxh7_s0PJp4",
    authDomain: "restautant-demo.firebaseapp.com",
    projectId: "restautant-demo",
    storageBucket: "restautant-demo.appspot.com",
    messagingSenderId: "910638270782",
    appId: "1:910638270782:web:269b1c5bc952363a01846f",
    measurementId: "G-FCY43HGKRC"
  };
  firebase.initializeApp(firebaseConfig)
 

  function randomID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      let r = (Math.random() * 16) | 0;
      let v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }






function generateFirebaseItem(ID, value) {
  return {
    id: ID,
    data: value
  }
}
function addElementInFirebase(REF, data) {
  firebase.database().ref(`${REF}/${randomID()}`).set(data);
}


 function getRefFromFirebase(REF) {
  const result = [];
  firebase.database().ref(REF).on("value", (response) => {
    response.forEach((element) => {
      result.push(generateFirebaseItem(element.key, element.val()));
    });
  });
  return result;
}
function getElementFromFirebase(REF, id) {
  const array = getRefFromFirebase(REF);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      array.forEach((element) => {
        if (element.id === id) {
          resolve(element);
        }
      });
      reject("404");
    }, 1000);
  });
}


function updateDataInFirebaseByID(REF, id, data) {
  firebase.database().ref(`${REF}/${id}`).set(data);
}


function removeElementFromFirebase(REF, id) {
  firebase.database().ref(`${REF}/${id}`).remove();
}


function removeRefFromFirebase(REF) {
  firebase.database().ref(REF).remove();
}



