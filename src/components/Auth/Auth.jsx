import React, { useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import * as firebaseui from "firebaseui";
import { GoogleAuthProvider, PhoneAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../../styles/Auth.css";
function Auth() {
  const navigate = useNavigate();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
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
        PhoneAuthProvider.PROVIDER_ID,
      ],
      signInFlow: "popup",
      callbacks: {
        signInSuccessWithAuthResult: async (authResult) => {
          setIsAuthenticating(true);
          console.log("Sign in successful!", authResult);

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
    <div className="login-box">
      {isAuthenticating ? (
        <div className="login-message">
          Successfully logged in! Redirecting...
        </div>
      ) : (
        <div className="login-options">
          <div id="firebaseui-auth-container"></div>
        </div>
      )}
    </div>
  );
}

export default Auth;
