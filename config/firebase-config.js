import firebase from "firebase/app";
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAB11POsXN-S2c2jleZyRIljCe-XhF-GHk",
    authDomain: "docogen-db.firebaseapp.com",
    projectId: "docogen-db",
    storageBucket: "docogen-db.appspot.com",
    messagingSenderId: "451062512532",
    appId: "1:451062512532:web:156f54f1b965eaa48dad81",
    measurementId: "G-LL43S7MSLL"
};
try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}
const fire = firebase
export const db = fire.firestore()

export default fire