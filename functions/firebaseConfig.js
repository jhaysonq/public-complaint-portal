// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc3QPqtoPK0yzAbu43hFAY3Swq4ui_oWI",
  authDomain: "osa-complaint-portal.firebaseapp.com",
  databaseURL: "https://osa-complaint-portal-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "osa-complaint-portal",
  storageBucket: "osa-complaint-portal.appspot.com",
  messagingSenderId: "746862089830",
  appId: "1:746862089830:web:366484a29e9a46060b3fa7",
  measurementId: "G-CWNTXSW57N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);