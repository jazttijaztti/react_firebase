import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBw7OOeltMGQkl6MoVz-fAA-emvoLsO0xc",
    authDomain: "react-firebase-abfbe.firebaseapp.com",
    databaseURL: "https://react-firebase-abfbe.firebaseio.com",
    projectId: "react-firebase-abfbe",
    storageBucket: "react-firebase-abfbe.appspot.com",
    messagingSenderId: "664328793336",
    appId: "1:664328793336:web:6c808c8d212b918d8e1f0d"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore()

export default firebase;
