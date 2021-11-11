import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/InitializeFirebase";

initializeFirebase();
const useFireBase = () => {

  // const { url, history} = LogIn();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user)
          // history.push(url);
        
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {});
  };
  return {
    user,
    isLoading,
    logOut,
    signInUsingGoogle,
  };
};
export default useFireBase;
