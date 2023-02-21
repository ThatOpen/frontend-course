import { FC } from "react";
import { useAppContext } from "../middleware/context-provider";
import { Navigate } from "react-router-dom";
import { LoginPage } from "./user/login-page";

export const Dashboard: FC = () => {
  const [state] = useAppContext();

  return state.user ? <Navigate to="/map" /> : <LoginPage />;
};
