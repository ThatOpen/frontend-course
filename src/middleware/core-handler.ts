import { mapHandler } from "../core/map/map-handler";
import { authHandler } from "../core/auth-handler";
import { Action } from "./actions";

export const executeCore = (action: Action) => {
  if (action.type === "LOGIN") {
    return authHandler.login();
  }
  if (action.type === "LOGOUT") {
    return authHandler.logout();
  }
  if (action.type === "START_MAP") {
    const { container, user } = action.payload;
    return mapHandler.start(container, user);
  }
  if (action.type === "REMOVE_MAP") {
    return mapHandler.remove();
  }
  if (action.type === "ADD_BUILDING") {
    return mapHandler.addBuilding(action.payload);
  }
};
