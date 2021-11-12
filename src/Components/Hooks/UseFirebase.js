import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,getIdToken
} from "@firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/InitializeFirebase";

initializeFirebase();
const useFireBase = () => {
  // const { url, history} = LogIn();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);


  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user)
        saveUser(result.user.email,result.user.displayName)
          // history.push(url);
        
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user)
        .then(idToken=>localStorage.setItem('idToken',idToken))
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  useEffect(() => {
    fetch(`https://vast-escarpment-72434.herokuapp.com/user/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setAdmin(data.admin)
      })
},[user.email])

  const saveUser = (email, displayName) => {
    const user = { displayName,email }
    fetch('https://vast-escarpment-72434.herokuapp.com/user', {
      method: "PUT",
      headers: {
        'content-type':"application/json"
      },
      body:JSON.stringify(user)
    })
    .then()
  }

  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {});
  };
  return {
    user,
    admin,
    isLoading,
    logOut,
    signInUsingGoogle,
  };
};
export default useFireBase;
