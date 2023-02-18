import { FC } from "react";
import { getAuth, signOut } from "firebase/auth";

export const LogOutButton: FC = () => {
  const auth = getAuth();
  const onLogoutClick = () => {
    signOut(auth);
  };

  return <button onClick={onLogoutClick}>Logout</button>;
};
