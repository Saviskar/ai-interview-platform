// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-JnyHet2ac3HoJ92r-ga7zAxXCpa0T2A",
  authDomain: "prepwise-bd54e.firebaseapp.com",
  projectId: "prepwise-bd54e",
  storageBucket: "prepwise-bd54e.firebasestorage.app",
  messagingSenderId: "64162117469",
  appId: "1:64162117469:web:92c7b2c95fc812f8e6dab4",
  measurementId: "G-JLLNBLVJ45"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);