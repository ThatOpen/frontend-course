import { FC } from "react";
import Button from "@mui/material/Button";
import { useAppContext } from "../../middleware/context-provider";

export const LogOutButton: FC = () => {
  const dispatch = useAppContext()[1];
  const onLogoutClick = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <Button onClick={onLogoutClick} variant="contained">
        Log out
      </Button>
    </>
  );
};
