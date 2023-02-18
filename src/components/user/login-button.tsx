import { FC } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const LogInButton: FC = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const onLoginClick = () => {
    signInWithPopup(auth, provider);
  };

  return <button onClick={onLoginClick}>Log in</button>;
};
