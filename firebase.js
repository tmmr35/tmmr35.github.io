// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBP1BqlzN9tHX4dGVCsr0MR9KvxjQCY7dc",
    authDomain: "sheep-b11df.firebaseapp.com",
    projectId: "sheep-b11df",
    storageBucket: "sheep-b11df.firebasestorage.app",
    messagingSenderId: "286599262462",
    appId: "1:286599262462:web:6db59ffb70b900a55ab5af",
    measurementId: "G-1N459T879B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
