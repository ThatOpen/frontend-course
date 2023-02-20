import {
  createContext,
  useReducer,
  FC,
  PropsWithChildren,
  useContext,
} from "react";
import { Action, ActionList } from "./actions";
import { reducer } from "./state-handler";
import { initialState, State } from "./state";
import { Authenticator } from "./authenticator";
import { executeCore } from "./core-handler";
import { Events } from "./event-handler";

const appContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => {},
]);

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useReducer(reducer, initialState);

  const events = new Events();

  const dispatch = (value: Action) => {
    setState(value);
    executeCore(value, events);
  };

  for (const type of ActionList) {
    events.on(type, (payload: any) => {
      const action = { type, payload };
      dispatch(action);
    });
  }

  return (
    <appContext.Provider value={[state, dispatch]}>
      <Authenticator />
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};
