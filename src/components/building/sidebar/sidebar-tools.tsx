import MapIcon from "@mui/icons-material/Map";
import LogoutIcon from "@mui/icons-material/Logout";
import ErrorIcon from "@mui/icons-material/GppMaybe";
import FloorplanIcon from "@mui/icons-material/FindInPage";
import ModelsIcon from "@mui/icons-material/HolidayVillage";
import ListIcon from "@mui/icons-material/ViewList";
import { Action } from "../../../middleware/actions";

interface SideTool {
  name: string;
  icon: any;
  action: () => void;
}

export function getSidebarTools(dispatch: React.Dispatch<Action>): SideTool[] {
  return [
    {
      name: "Properties",
      icon: <ListIcon />,
      action: () => {
        console.log("Models!");
      },
    },
    {
      name: "Models",
      icon: <ModelsIcon />,
      action: () => {
        console.log("Models!");
      },
    },
    {
      name: "Floorplans",
      icon: <FloorplanIcon />,
      action: () => {
        console.log("Models!");
      },
    },
    {
      name: "Issues",
      icon: <ErrorIcon />,
      action: () => {
        console.log("Models!");
      },
    },
    {
      name: "Map",
      icon: <MapIcon />,
      action: () => {
        dispatch({ type: "CLOSE_BUILDING" });
      },
    },
    {
      name: "Log out",
      icon: <LogoutIcon />,
      action: () => {
        dispatch({ type: "LOGOUT" });
      },
    },
  ];
}
