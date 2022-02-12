// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW-keJvq3S80txhEw-iWzmCaImWyihzDQ",
  authDomain: "frontend7-68338.firebaseapp.com",
  projectId: "frontend7-68338",
  storageBucket: "frontend7-68338.appspot.com",
  messagingSenderId: "30945177923",
  appId: "1:30945177923:web:947e154f41a85a85f67ff6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const db = getFirestore();

export{
    app,
    google,
    db
}