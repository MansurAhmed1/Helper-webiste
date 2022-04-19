/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGN3eifaEbp-WkSxsVquG_TcHf-Oj3JH8",
  authDomain: "try-myself.firebaseapp.com",
  projectId: "try-myself",
  storageBucket: "try-myself.appspot.com",
  messagingSenderId: "164179985116",
  appId: "1:164179985116:web:e268f2998acd0d00566a19",
  measurementId: "G-MVYBWPKY5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
