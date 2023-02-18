import { FC } from "react";
import { useAppContext } from "../middleware/context-provider";

export const LoginForm: FC = () => {
  const [state] = useAppContext();

  const onClick = () => {};

  return state.user ? (
    <> {state.user.displayName} </>
  ) : (
    <button onClick={onClick}>Login</button>
  );
};
