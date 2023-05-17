// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAu1aPS9hZSi3DjWqoYVqZ1v82pLL2Hva4",
    authDomain: "react-firebase-authentic-36040.firebaseapp.com",
    projectId: "react-firebase-authentic-36040",
    storageBucket: "react-firebase-authentic-36040.appspot.com",
    messagingSenderId: "497235077151",
    appId: "1:497235077151:web:cda0570465e811977ecd2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app