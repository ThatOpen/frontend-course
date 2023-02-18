import { userAuth } from "./../core/UserAuth";
import { Action } from "./actions";
import { State } from "./state";
import { isTimeValid } from "./time-limiter";

export const reducer = (state: State, action: Action) => {
  if (!isTimeValid()) {
    return { ...state };
  }

  const name = action.action;
  if (actionMap[name]) {
    actionMap[name](state);
    return { ...state };
  } else {
    throw new Error(`Action ${action} not available`);
  }
};

const actionMap: { [action: string]: Function } = {
  LOGIN: () => userAuth.login(),
};
