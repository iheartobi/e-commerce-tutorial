import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA5ejpOYxQVf73Cnc0-yuCg_TR4uuTn5Po',
  authDomain: 'e-commerce-tutorial-db.firebaseapp.com',
  databaseURL: 'https://e-commerce-tutorial-db.firebaseio.com',
  projectId: 'e-commerce-tutorial-db',
  storageBucket: 'e-commerce-tutorial-db.appspot.com',
  messagingSenderId: '55618699915',
  appId: '1:55618699915:web:f96b8ec5527d127ed64a8e',
  measurementId: 'G-Y7PHMTVGLB'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase
