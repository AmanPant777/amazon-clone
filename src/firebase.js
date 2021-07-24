import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBLTHrXRbIZi_FxaflJjFr4QI7iEo7IsZI",
  authDomain: "clone-cc365.firebaseapp.com",
  projectId: "clone-cc365",
  storageBucket: "clone-cc365.appspot.com",
  messagingSenderId: "301134806130",
  appId: "1:301134806130:web:89e0b5eea9add0b8aed6eb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
