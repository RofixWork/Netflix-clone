import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDc7lc7VjVSCPmSegvjziIUcOJHm-RqVVg",
  authDomain: "netflix-clone-build-f266c.firebaseapp.com",
  projectId: "netflix-clone-build-f266c",
  storageBucket: "netflix-clone-build-f266c.appspot.com",
  messagingSenderId: "414564831874",
  appId: "1:414564831874:web:b61a978fbc88f0e265da9b",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
