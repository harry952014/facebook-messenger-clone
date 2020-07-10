import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDVtcBG_EV4KKmxzdXamzPV1bSCHtbUy_E",
    authDomain: "facebook-messenger-clone-8ec09.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-8ec09.firebaseio.com",
    projectId: "facebook-messenger-clone-8ec09",
    storageBucket: "facebook-messenger-clone-8ec09.appspot.com",
    messagingSenderId: "514430540777",
    appId: "1:514430540777:web:357dc0b0975c02d3b84978",
    measurementId: "G-1QVRBXLDEG"
});

const db = firebaseApp.firestore();

export default db;