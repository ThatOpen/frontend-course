import { Card, CardContent, IconButton } from "@mui/material";
import { FC } from "react";
import "./building-front-menu.css";
import CloseIcon from "@mui/icons-material/Close";
import { BuildingInfoMenu } from "./front-menu-content/building-info-menu";
import { ModelListMenu } from "./front-menu-content/model-list-menu";
import { FrontMenuMode } from "./types";

export const BuildingFrontMenu: FC<{
  mode: FrontMenuMode;
  open: boolean;
  onToggleMenu: (active: boolean) => void;
}> = ({ mode, open, onToggleMenu }) => {
  if (!open) {
    return <></>;
  }

  const content = new Map<FrontMenuMode, any>();
  content.set("BuildingInfo", <BuildingInfoMenu onToggleMenu={onToggleMenu} />);
  content.set("ModelList", <ModelListMenu />);

  const titles = {
    BuildingInfo: "Building Information",
    ModelList: "Model List",
  };

  const title = titles[mode];

  return (
    <Card className="front-menu">
      <CardContent>
        <div className="front-menu-header">
          <h2>{title}</h2>
          <IconButton onClick={() => onToggleMenu(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="front-menu-content">{content.get(mode)}</div>
      </CardContent>
    </Card>
  );
};
