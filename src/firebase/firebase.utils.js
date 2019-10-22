import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVSm9GE3_oQG9UrWbNJA3PU_d494BlwzQ",
    authDomain: "crown-clothing-96720.firebaseapp.com",
    databaseURL: "https://crown-clothing-96720.firebaseio.com",
    projectId: "crown-clothing-96720",
    storageBucket: "crown-clothing-96720.appspot.com",
    messagingSenderId: "9812839855",
    appId: "1:9812839855:web:ee987aa5b3ef79bd01f35a"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;