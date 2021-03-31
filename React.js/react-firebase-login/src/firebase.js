import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB1IPtE73pIkijmjd7R5103uwTkqWQRiGs",
    authDomain: "loginsysteem-fab15.firebaseapp.com",
    projectId: "loginsysteem-fab15",
    storageBucket: "loginsysteem-fab15.appspot.com",
    messagingSenderId: "4824950863",
    appId: "1:4824950863:web:f1cd7228fe86188ffd623a"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;