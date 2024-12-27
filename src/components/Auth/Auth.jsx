import React, { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../../styles/Auth.css";
import salonExterior from "../../assets/salon-exterior.jpg";

function SignInPage() {
  const navigate = useNavigate();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    // user sign-in
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(auth);
    }
    const uiConfig = {
      signInOptions: [
        {
          provider: GoogleAuthProvider.PROVIDER_ID,
          customParameters: {
            prompt: "select_account",
          },
        },
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          signInMethod:
            firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
          forceSameDevice: false,
        },
      ],
      signInFlow: "popup",
      callbacks: {
        signInSuccessWithAuthResult: async (authResult) => {
          setIsAuthenticating(true);
          console.log("Sign in successful!", authResult);
          console.log(authResult.user.displayName);
          await new Promise((resolve) => setTimeout(resolve, 100));

          return new Promise((resolve) => {
            setTimeout(() => {
              navigate("/", { replace: true });
              resolve(false);
            }, 2000);
          });
        },
        signInFailure: function (error) {
          console.error("Sign in failed:", error);
          setIsAuthenticating(false);
        },
      },
    };
    try {
      ui.start("#firebaseui-auth-container", uiConfig);
    } catch (error) {
      console.error("Error starting UI:", error);
    }

    return () => {};
  }, [navigate]);

  return (
    <div className="SignInPage">
      {isAuthenticating ? (
        <div className="login-message">
          Successfully logged in! Redirecting...
        </div>
      ) : (
        <div className="container">
          <img src={salonExterior} alt="" />
          <div className="login-options">
            <div id="firebaseui-auth-container"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignInPage;
