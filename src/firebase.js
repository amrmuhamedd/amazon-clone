import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-uh_qOOzrGrnvupjx2GaUCpCmAww35LA",
  authDomain: "clone-23cfa.firebaseapp.com",
  projectId: "clone-23cfa",
  storageBucket: "clone-23cfa.appspot.com",
  messagingSenderId: "89855874628",
  appId: "1:89855874628:web:3a206b502f1b9bdcb14e11",
  measurementId: "G-8NZ5H605F1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
