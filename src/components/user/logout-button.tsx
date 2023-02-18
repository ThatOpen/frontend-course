import { FC } from "react";
import { getAuth, signOut } from "firebase/auth";
import Button from "@mui/material/Button";

export const LogOutButton: FC = () => {
  const auth = getAuth();
  const onLogoutClick = () => {
    signOut(auth);
  };

  return (
    <>
      <Button onClick={onLogoutClick} variant="contained">
        Log out
      </Button>
    </>
  );
};
