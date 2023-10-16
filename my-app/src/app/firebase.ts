// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export async function getUsers() {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})); 
    console.log(users);
    return users;
}

// Sign up with email and password

