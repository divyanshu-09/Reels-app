import firebase from "firebase/app";

import "firebase/firestore";

//Step 1
import "firebase/auth";


import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDkrVc7u7V9PVz9VGNGhRt2bmWVFtQ_ufA",
    authDomain: "reels-6d4de.firebaseapp.com",
    projectId: "reels-6d4de",
    storageBucket: "reels-6d4de.appspot.com",
    messagingSenderId: "385801310071",
    appId: "1:385801310071:web:11c129c365bb356d17db72"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();

  //Step 2
  export const auth = firebase.auth();

  //Step 3=> firebase console; enable google login in auth panel

  //Step 4
  let provider = new firebase.auth.GoogleAuthProvider();

  //Step 5
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;

  export const storage = firebase.storage()