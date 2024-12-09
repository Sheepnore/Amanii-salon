import { googleProvider, auth } from "../../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

const Auth = () => {
  const signInWithGoogle = async () => {
    try {
      // Explicitly configure the provider to show account chooser
      googleProvider.setCustomParameters({
        prompt: "select_account",
      });

      const result = await signInWithPopup(auth, googleProvider);

      // Optionally log the user details
      console.log("Signed in user:", result.user);
    } catch (err) {
      // More detailed error handling
      if (err.code === "auth/popup-blocked") {
        console.error("Popup was blocked. Please enable popups for this site.");
        // Optionally, fall back to redirect method
        // await signInWithRedirect(auth, googleProvider);
      } else if (err.code === "auth/popup-closed-by-user") {
        console.error("Popup was closed before completing sign-in");
      } else {
        console.error("Sign-in error:", err);
      }
    }
  };
  console.log(auth?.currentUser?.email);

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      <button onClick={logOut}>Sign Out</button>
    </>
  );
};

export default Auth;
