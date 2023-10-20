// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD52wK0FQ7xnDUSXl8WqwJGz7u2GvDQ6Hg",
  authDomain: "wikimedia-9b322.firebaseapp.com",
  projectId: "wikimedia-9b322",
  storageBucket: "wikimedia-9b322.appspot.com",
  messagingSenderId: "712940938814",
  appId: "1:712940938814:web:8c2cc2d57e12e64815936f"
};

// look for an instance of firebase, if not found init a new one
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
export { app};