import { createContext, createSignal, useContext } from "solid-js";
import { app } from "../configs/firebase.config";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();
function Auth(props) {
  const [userData, setUserData] = createSignal(null);
  onAuthStateChanged(getAuth(app), async (currentUser) => {
    const data = { name: currentUser.displayName, id: currentUser.uid };
    setUserData(data);
  })();
  const signIn = () => {
    signInWithRedirect(getAuth(app), new GoogleAuthProvider());
  };
  const logOut = async () => {
    await signOut(getAuth(app), () => console.log("done"));
    setUserData(null);
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ userData, signIn, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default Auth;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
