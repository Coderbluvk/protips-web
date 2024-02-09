// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ1hhLojapvFydKIBk2cPty0MGT7nyNr4",
  authDomain: "protips-eedd1.firebaseapp.com",
  projectId: "protips-eedd1",
  storageBucket: "protips-eedd1.appspot.com",
  messagingSenderId: "375539075626",
  appId: "1:375539075626:web:b7ef48f5415175cdf05153",
  measurementId: "G-GY3ZCK2J5F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
