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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
