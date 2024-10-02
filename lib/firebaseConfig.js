// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIaQ2yx6ICniwk_jG122oNW9QCl-wgdLY",
  authDomain: "shami-2f410.firebaseapp.com",
  projectId: "shami-2f410",
  storageBucket: "shami-2f410.appspot.com",
  messagingSenderId: "968135006394",
  appId: "1:968135006394:web:a3892b9dd3c84655208a83",
  measurementId: "G-S3YKR9H48B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);

// Initialize Firestore and Auth services
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
