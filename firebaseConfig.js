import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


var FirebaseKeys = {
    apiKey: "AIzaSyBhqzcD5ZzUyfbZwtevsG-yNMOctVH-kTI",
    authDomain: "oneqr-c7820.firebaseapp.com",
    projectId: "oneqr-c7820",
    storageBucket: "oneqr-c7820.appspot.com",
    messagingSenderId: "380959409997",
    appId: "1:380959409997:web:d2d346e0a5bd8fc7fb1904",
    measurementId: "G-3RSTBEWW2G"
  };


const app = initializeApp(FirebaseKeys);
const auth = getAuth()
const fs = getFirestore()

export {auth, app, fs}

