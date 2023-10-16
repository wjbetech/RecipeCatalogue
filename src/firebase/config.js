import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0ZlOgu8oQgz-eQI-kvpyYodxJu9v3h5g",
  authDomain: "recipe-catalogue-60385.firebaseapp.com",
  projectId: "recipe-catalogue-60385",
  storageBucket: "recipe-catalogue-60385.appspot.com",
  messagingSenderId: "465693752962",
  appId: "1:465693752962:web:48ce6496ceafb378ec3e9b",
  measurementId: "G-XXN1XEMB57"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const myProjectFirestore = firebase.firestore();

export { myProjectFirestore };