import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth, GoogleAuthProvider } from "firebase/auth";
import {connectFirestoreEmulator, getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider()

connectAuthEmulator(auth,'http://localhost:9099');
connectFirestoreEmulator(db,'localhost',8080)



// export async function getUserData() {
//   const user = auth.currentUser;

//   if (user) {
//     try {
//       // Get the ID token
//       const idToken = await user.getIdToken();
//       // User data
//       const userData = {
//         name: user.displayName,
//         email: user.email,
//         photo: user.photoURL,
//         id: user.uid,
//       };
//       console.log(userData);
//       return userData;
//     } catch (error) {
//       console.error("Error getting user data:", error);
//     }
//   } else {
//     console.log("No user is signed in");
//   }
// }



