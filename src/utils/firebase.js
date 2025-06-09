// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIgZ6PKRwup-yqGQrVH8Iy8z_1gkVi-cg",
  authDomain: "netflixgpt-c97e8.firebaseapp.com",
  projectId: "netflixgpt-c97e8",
  storageBucket: "netflixgpt-c97e8.firebasestorage.app",
  messagingSenderId: "235264235257",
  appId: "1:235264235257:web:f89084aa264d15d111f428",
  measurementId: "G-VF84M7EL36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();