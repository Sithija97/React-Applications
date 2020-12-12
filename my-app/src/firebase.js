import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCtaNPVF00O7ywUqVauSRVgOB2gpllio9I",
  authDomain: "my-react-7b29c.firebaseapp.com",
  projectId: "my-react-7b29c",
  storageBucket: "my-react-7b29c.appspot.com",
  messagingSenderId: "693417951024",
  appId: "1:693417951024:web:d120b7e81eb636d7bc52f5",
});

const db = firebaseApp.firestore();

export default db;