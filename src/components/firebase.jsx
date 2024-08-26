// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf2Eo9HvOtAMoDgQA4TCx2GLwrHbmjsns",
  authDomain: "fitness-planner-1e824.firebaseapp.com",
  projectId: "fitness-planner-1e824",
  storageBucket: "fitness-planner-1e824.appspot.com",
  messagingSenderId: "595054548943",
  appId: "1:595054548943:web:f2d10fcf5a22f37b3724ba",
  measurementId: "G-35DJMF9R08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);