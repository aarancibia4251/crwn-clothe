import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAYPKLCfa_74pFuxFH-TG7p6wMyU38ovrc",
    authDomain: "crwn-clothes-ts.firebaseapp.com",
    databaseURL: "https://crwn-clothes-ts.firebaseio.com",
    projectId: "crwn-clothes-ts",
    storageBucket: "crwn-clothes-ts.appspot.com",
    messagingSenderId: "861382026419",
    appId: "1:861382026419:web:c165182e2d51c4a6637cc6",
    measurementId: "G-L44611QQ5N"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
