import { TextField } from "@mui/material";
import { FC } from "react";
import { useAppContext } from "../../../../middleware/context-provider";
import "./front-menu-content.css";

export const BuildingInfoMenu: FC = () => {
  const [state] = useAppContext();
  console.log(state.building);

  return (
    <div className="full-width">
      <div className="list-item">
        <TextField
          className="full-width"
          id="filled-helperText"
          label="Longitude"
          defaultValue="Default Value"
        />
      </div>
      <div className="list-item">
        <TextField
          className="full-width"
          id="filled-helperText"
          label="Latitude"
          defaultValue="Default Value"
        />
      </div>
    </div>
  );
};
