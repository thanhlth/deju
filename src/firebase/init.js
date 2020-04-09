require("firebase/auth");
require("firebase/firestore");

import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyDFmBywD_AyC_Na5RgZO0Z6lV7qUvZsDnw",
    authDomain: "deju-7ede1.firebaseapp.com",
    databaseURL: "https://deju-7ede1.firebaseio.com",
    projectId: "deju-7ede1",
    storageBucket: "deju-7ede1.appspot.com",
    messagingSenderId: "491569752524",
    appId: "1:491569752524:web:d41e2e8d5e1219e068d569",
    measurementId: "G-SCH8K8GTF4"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  //firebaseApp.firestore().settings({timestampsInSnapshots: true })
  export default firebaseApp.firestore()