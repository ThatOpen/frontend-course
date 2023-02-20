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
        const model = { name: file.name, id };
        newBuilding.models.push(model);
        dispatch({
          type: "UPLOAD_MODEL",
          payload: {
            building: newBuilding,
            file,
            model,
          },
        });
      }
      input.remove();
    };
    input.click();
    // input.accept = ".ifc";
  };

  const onDeleteModel = (id: string) => {
    const newBuilding = { ...building };
    const model = newBuilding.models.find((model) => model.id === id);
    if (!model) throw new Error("Model not found!");
    newBuilding.models = newBuilding.models.filter((model) => model.id !== id);
    dispatch({
      type: "DELETE_MODEL",
      payload: { building: newBuilding, model },
    });
  };

  return (
    <div className="full-width">
      {building.models.length ? (
        building.models.map((model) => (
          <div className="list-item" key={model.id}>
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
