import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, FC } from "react";
import { useAppContext } from "./context-provider";

let authInitialized = false;

export const Authenticator: FC = () => {
  const auth = getAuth();
  const dispatch = useAppContext()[1];

  const listenToAuthChanges = () => {
    onAuthStateChanged(auth, (foundUser) => {
      const user = foundUser ? { ...foundUser } : null;
      dispatch({ type: "UPDATE_USER", payload: user });
    });
  };

  useEffect(() => {
    if (!authInitialized) {
      listenToAuthChanges();
      authInitialized = true;
    }
  });

  return <></>;
};
