import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAa7UVzbfDdYB64nwPx0A39rmsYs_htnYg",
  authDomain: "aa-3a551.firebaseapp.com",
  projectId: "aa-3a551",
  storageBucket: "aa-3a551.appspot.com",
  messagingSenderId: "835830174995",
  appId: "1:835830174995:web:4457c7a3b03229bcb3b6e6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
