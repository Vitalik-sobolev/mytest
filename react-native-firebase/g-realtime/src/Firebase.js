// src/firebase.js
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDLpDDrzXFkkTn1zmglGQZEk5cEIE4r39k",
    authDomain: "restauranttoronto-c2b09.firebaseapp.com",
    databaseURL: "https://restauranttoronto-c2b09.firebaseio.com",
    projectId: "restauranttoronto-c2b09",
    storageBucket: "restauranttoronto-c2b09.appspot.com",
    messagingSenderId: "507170496521",
    appId: "1:507170496521:web:0719e7dd3209bca42318d8",
    measurementId: "G-0K4BS00ZPP"
};

firebase.initializeApp(config);


export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;