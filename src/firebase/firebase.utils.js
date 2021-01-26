import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyCxEx9YTOnVTZL7F1508X3hkETMZor4y98",
    authDomain: "apna-dukaan-db.firebaseapp.com",
    projectId: "apna-dukaan-db",
    storageBucket: "apna-dukaan-db.appspot.com",
    messagingSenderId: "973250682967",
    appId: "1:973250682967:web:974b15412cd1eecb4dc312",
    measurementId: "G-FV8JYZS2KQ"
  };
  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore=firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =()=> auth.signInWithPopup(provider);

  export default firebase;
