export type ActionType =
  // User auth
  | "LOGIN"
  | "LOGOUT"
  | "UPDATE_USER"
  // Map
  | "START_MAP"
  | "REMOVE_MAP"
  | "ADD_BUILDING"
  // Building
  | "OPEN_BUILDING"
  | "CLOSE_BUILDING";

export interface Action {
  type: ActionType;
  payload?: any;
}
