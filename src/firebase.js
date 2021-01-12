import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD9aDr_TSUB1Bdx4ZheffdhDuDD3l_Tpbs",
    authDomain: "mysnapchat-5e95f.firebaseapp.com",
    projectId: "mysnapchat-5e95f",
    storageBucket: "mysnapchat-5e95f.appspot.com",
    messagingSenderId: "205766297873",
    appId: "1:205766297873:web:5fc24ebc37a02adf97e4b0",
    measurementId: "G-E3TPRBJZJM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebse.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,storage,provider } ;