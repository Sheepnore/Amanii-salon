import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";

const UserDataContext = createContext();

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const name = user.displayName;
        const email = user.email;
        const uid = user.uid;
        console.log(name, email, uid);
        setUserData({ name, email, uid });
      } else {
        setUserData(null);
        console.log("no user signin");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useAuth() {
  return useContext(UserDataContext);
}
