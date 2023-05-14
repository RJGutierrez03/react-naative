import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBdJTtS4Sv4LLLR7-XcWMxjWjLz8eq_eqs",
  authDomain: "test-30456.firebaseapp.com",
  projectId: "test-30456",
  storageBucket: "test-30456.appspot.com",
  messagingSenderId: "753049936368",
  appId: "1:753049936368:web:a2cc973a14f9eee06c7d35",
  measurementId: "G-30YS4K63HH"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };