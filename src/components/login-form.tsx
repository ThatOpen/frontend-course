import { FC } from "react";
import { useAppContext } from "../middleware/context-provider";

export const LoginForm: FC = () => {
  const dispatch = useAppContext()[1];

  const onClick = () => {
    dispatch({ action: "LOGIN" });
  };

  return <button onClick={onClick}>Login</button>;
};
