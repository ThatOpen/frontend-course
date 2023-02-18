import { FC } from "react";
import { LogOutButton } from "./user/logout-button";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../middleware/context-provider";

export const MapViewer: FC = () => {
  const [state] = useAppContext();

  if (!state.user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1>Hello map viewer!</h1>
      <LogOutButton />
    </>
  );
};
