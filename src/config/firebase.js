import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAei7TKB2m3o_4hdlhPQF6ROHXj38Q3Iok",
  authDomain: "salon-project-43926.firebaseapp.com",
  projectId: "salon-project-43926",
  storageBucket: "salon-project-43926.firebasestorage.app",
  messagingSenderId: "691004466662",
  appId: "1:691004466662:web:97a033d8aba5455ad02227",
  measurementId: "G-X9LC9PLKT3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app);