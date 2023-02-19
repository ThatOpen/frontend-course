import { Button, Card, CardContent } from "@mui/material";
import { FC } from "react";
import "./building-front-menu.css";
import CloseIcon from "@mui/icons-material/Close";
import { BuildingInfoMenu } from "./front-menu-content/building-info-menu";

export type FrontMenuMode = "BuildingInfo";

export const BuildingFrontMenu: FC<{ mode: FrontMenuMode }> = ({ mode }) => {
  const content = new Map<FrontMenuMode, any>();
  content.set("BuildingInfo", <BuildingInfoMenu />);

  return (
    <Card className="front-menu">
      <CardContent>
        <div className="front-menu-header">
          <h2>Title</h2>
          <Button>
            <CloseIcon />
          </Button>
        </div>
        <div className="front-menu-content">{content.get(mode)}</div>
      </CardContent>
    </Card>
  );
};
