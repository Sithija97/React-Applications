import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXkysCOholr7gq42IV_iL5v2_QNokm9_Y",
  authDomain: "auth-f170b.firebaseapp.com",
  projectId: "auth-f170b",
  storageBucket: "auth-f170b.appspot.com",
  messagingSenderId: "226058854466",
  appId: "1:226058854466:web:455693de3dd4b775688ddb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();

export { auth, providerGoogle, providerFacebook };
export default db;