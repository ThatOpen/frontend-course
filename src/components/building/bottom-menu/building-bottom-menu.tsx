import { Card, CardContent, IconButton } from "@mui/material";
import { FC } from "react";
import "./building-bottom-menu.css";
import CloseIcon from "@mui/icons-material/Close";

export const BuildingBottomMenu: FC = () => {
  return (
    <Card className="bottom-menu">
      <IconButton>
        <CloseIcon />
      </IconButton>
      <IconButton>
        <CloseIcon />
      </IconButton>
      <IconButton>
        <CloseIcon />
      </IconButton>
      <IconButton>
        <CloseIcon />
      </IconButton>
      <IconButton>
        <CloseIcon />
      </IconButton>
      <IconButton>
        <CloseIcon />
      </IconButton>
      <IconButton>
        <CloseIcon />
      </IconButton>
      <IconButton>
        <CloseIcon />
      </IconButton>
      <IconButton>
        <CloseIcon />
      </IconButton>
    </Card>
  );
};
