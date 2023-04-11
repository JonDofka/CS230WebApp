export const environment = {
    production: true
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyD_eKx3rZcpXa03lUFXWtG8lnjJE4A6E",
  authDomain: "beautycollege-360c1.firebaseapp.com",
  databaseURL: "https://beautycollege-360c1-default-rtdb.firebaseio.com",
  projectId: "beautycollege-360c1",
  storageBucket: "beautycollege-360c1.appspot.com",
  messagingSenderId: "45489657946",
  appId: "1:45489657946:web:8b94850698ea073387a063",
  measurementId: "G-11SJFR78CL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);