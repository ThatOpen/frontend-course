import { Card, IconButton } from "@mui/material";
import { FC } from "react";
import "./building-bottom-menu.css";
import { getBottombarTools } from "./bottombar-tools";
import { useAppContext } from "../../../middleware/context-provider";

const tools = getBottombarTools();

export const BuildingBottomMenu: FC = () => {
  const dispatch = useAppContext()[1];

  return (
    <Card className="bottom-menu">
      {tools.map((tool) => {
        return (
          <IconButton
            color={tool.active ? "primary" : "default"}
            onClick={() => tool.action(dispatch)}
            key={tool.name}
          >
            {tool.icon}
          </IconButton>
        );
      })}
    </Card>
  );
};
