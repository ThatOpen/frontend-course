import { Button, IconButton, TextField } from "@mui/material";
import { FC, useRef } from "react";
import { useAppContext } from "../../../../middleware/context-provider";
import DeleteIcon from "@mui/icons-material/Clear";
import "./front-menu-content.css";

export const ModelListMenu: FC = () => {
  const [state, dispatch] = useAppContext();

  const { building, user } = state;
  if (!building || !user) {
    throw new Error("Error: building or user not found");
  }

  const onUploadModel = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.style.visibility = "hidden";
    document.body.appendChild(input);
    input.onchange = () => {
      if (input.files && input.files.length) {
        const file = input.files[0];
        const newBuilding = { ...building };
        const id = `${file.name}-${performance.now()}`;
        newBuilding.models.push({ name: file.name, id });
        dispatch({ type: "UPDATE_BUILDING", payload: newBuilding });
      }
    };
    input.click();
  };

  const onDeleteModel = (id: string) => {
    const newBuilding = { ...building };
    newBuilding.models = newBuilding.models.filter((model) => model.id !== id);
    dispatch({ type: "UPDATE_BUILDING", payload: newBuilding });
  };

  return (
    <div className="full-width">
      {building.models.length ? (
        building.models.map((model) => (
          <div className="list-item">
            <IconButton onClick={() => onDeleteModel(model.id)}>
              <DeleteIcon />
            </IconButton>
            <span className="margin-left">{model.name}</span>
          </div>
        ))
      ) : (
        <p>This building has no models!</p>
      )}
      <div className="list-item">
        <Button onClick={onUploadModel} className="submit-button">
          Upload model
        </Button>
      </div>
    </div>
  );
};
