import { Card, CardContent, IconButton } from "@mui/material";
import { FC } from "react";
import "./building-bottom-menu.css";
import CloseIcon from "@mui/icons-material/Close";
import { getBottombarTools } from "./bottombar-tools";
import { useAppContext } from "../../../middleware/context-provider";

export const BuildingBottomMenu: FC = () => {
  const [state, dispatch] = useAppContext();

  const tools = getBottombarTools(state, dispatch);

  return (
    <Card className="bottom-menu">
      {tools.map((tool) => (
        <IconButton>{tool.icon}</IconButton>
      ))}
    </Card>
  );
};
