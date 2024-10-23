// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATf-irTTwobkv7UWqMxYIh3M4ngv3smVM",
    authDomain: "cs5520-fa2024-assignment2.firebaseapp.com",
    projectId: "cs5520-fa2024-assignment2",
    storageBucket: "cs5520-fa2024-assignment2.appspot.com",
    messagingSenderId: "246427440981",
    appId: "1:246427440981:web:bb1d3c542aed03651901dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);