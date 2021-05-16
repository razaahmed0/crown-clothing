import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAemDvfNgb-S2EZ6q6rySfzC6vV0eoNMEY',
  authDomain: 'crown-db-38b7a.firebaseapp.com',
  projectId: 'crown-db-38b7a',
  storageBucket: 'crown-db-38b7a.appspot.com',
  messagingSenderId: '895843243949',
  appId: '1:895843243949:web:08cbd080c9377d0b8cb324',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
