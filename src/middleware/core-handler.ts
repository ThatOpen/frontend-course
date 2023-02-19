import { mapHandler } from "../core/map/map-handler";
import { databaseHandler } from "../core/database/db-handler";
import { Action } from "./actions";
import { Events } from "./event-handler";

export const executeCore = (action: Action, events: Events) => {
  if (action.type === "LOGIN") {
    return databaseHandler.login();
  }
  if (action.type === "LOGOUT") {
    return databaseHandler.logout();
  }
  if (action.type === "START_MAP") {
    const { container, user } = action.payload;
    return mapHandler.start(container, user, events);
  }
  if (action.type === "REMOVE_MAP") {
    return mapHandler.remove();
  }
  if (action.type === "ADD_BUILDING") {
    return mapHandler.addBuilding(action.payload);
  }
  if (action.type === "DELETE_BUILDING") {
    return databaseHandler.deleteBuilding(action.payload, events);
  }
  if (action.type === "UPDATE_BUILDING") {
    return databaseHandler.updateBuilding(action.payload);
  }
};
