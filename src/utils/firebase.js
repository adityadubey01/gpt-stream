// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq-f4kSrzRofsdxhIPeNyyZsxa7_RxNlE",
  authDomain: "gptstream-700ac.firebaseapp.com",
  projectId: "gptstream-700ac",
  storageBucket: "gptstream-700ac.appspot.com",
  messagingSenderId: "1019452997792",
  appId: "1:1019452997792:web:f84e2a953ce43857e889c5",
  measurementId: "G-XPF5YMKW7J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
