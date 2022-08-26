import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA8tcWHytRwQ7XUWZ09ULWztmjXO3UMwXM",
  authDomain: "vue-3-2022-5d658.firebaseapp.com",
  projectId: "vue-3-2022-5d658",
  storageBucket: "vue-3-2022-5d658.appspot.com",
  messagingSenderId: "522104428962",
  appId: "1:522104428962:web:3044a9421a8d8199c07afb",
};

//const app =
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
