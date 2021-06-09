// src/firebase.js
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCKQs5N4ic-rcV5hUoMqxWtB1WZhFpiw2I",
    authDomain: "test111-b17d4.firebaseapp.com",
    databaseURL: "https://test111-b17d4.firebaseio.com",
    projectId: "test111-b17d4",
    storageBucket: "test111-b17d4.appspot.com",
    messagingSenderId: "820946572086",
    appId: "1:820946572086:web:b8b90f6c1b7aeeb4411997",
    measurementId: "G-SPT9B5REG6"
};

firebase.initializeApp(config);


export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;