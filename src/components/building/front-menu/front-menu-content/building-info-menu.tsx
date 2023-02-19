import { Button, TextField } from "@mui/material";
import { FC, useRef } from "react";
import { useAppContext } from "../../../../middleware/context-provider";
import "./front-menu-content.css";

export const BuildingInfoMenu: FC<{
  onToggleMenu: (active: boolean) => void;
}> = ({ onToggleMenu }) => {
  const [state, dispatch] = useAppContext();

  const { building } = state;
  if (!building) {
    throw new Error("No building active!");
  }

  const newBuilding = { ...building } as any;

  const onUpdateBuilding = () => {
    dispatch({ type: "UPDATE_BUILDING", payload: newBuilding });
    onToggleMenu(false);
  };

  const onInputChanged = (key: string, event: any) => {
    newBuilding[key] = event.target.value;
  };

  return (
    <div className="full-width">
      <div className="list-item">
        <TextField
          className="full-width"
          id="filled-helperText"
          label="Building ID"
          defaultValue={building.uid}
          disabled={true}
        />
      </div>
      <div className="list-item">
        <TextField
          className="full-width"
          id="filled-helperText"
          label="Name"
          defaultValue={building.name}
          onChange={(event) => onInputChanged("name", event)}
        />
      </div>
      <div className="list-item">
        <TextField
          className="full-width"
          id="filled-helperText"
          label="Longitude"
          defaultValue={building.lng}
          onChange={(event) => onInputChanged("lng", event)}
          type="number"
        />
      </div>
      <div className="list-item">
        <TextField
          className="full-width"
          id="filled-helperText"
          label="Latitude"
          defaultValue={building.lat}
          onChange={(event) => onInputChanged("lat", event)}
          type="number"
        />
      </div>
      <div className="list-item">
        <Button onClick={onUpdateBuilding} className="submit-button">
          Update building
        </Button>
      </div>
    </div>
  );
};
