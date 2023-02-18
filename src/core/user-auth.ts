import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

export const userAuth = {
  login: () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  },

  logout: () => {
    const auth = getAuth();
    signOut(auth);
  },
};
