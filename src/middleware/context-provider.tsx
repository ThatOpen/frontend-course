import {
  createContext,
  useReducer,
  FC,
  PropsWithChildren,
  useContext,
} from "react";
import { Action } from "./actions";
import { reducer } from "./reducer";
import { initialState, State } from "./state";

const appContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => {},
]);

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <appContext.Provider value={[state, dispatch]}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};
