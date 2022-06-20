// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqmjpzvTSkmEnwoFirOdZYvjtYI7VzLqg",
  authDomain: "babilonia-restaurant.firebaseapp.com",
  projectId: "babilonia-restaurant",
  storageBucket: "babilonia-restaurant.appspot.com",
  messagingSenderId: "1076689628424",
  appId: "1:1076689628424:web:9c575035bc6339659d90bd",
  measurementId: "G-BY1CGGNTKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);