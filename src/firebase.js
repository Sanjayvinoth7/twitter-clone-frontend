// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgZSuxJqui0Pkn2mjnH_hpxCkECPkLTO4",
  authDomain: "twitter-970a5.firebaseapp.com",
  projectId: "twitter-970a5",
  storageBucket: "twitter-970a5.appspot.com",
  messagingSenderId: "921376926646",
  appId: "1:921376926646:web:6aad92b92c29e1b0dbaf17",
  measurementId: "G-WC7R45D0D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app ;