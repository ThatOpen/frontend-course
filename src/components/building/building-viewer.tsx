import { FC, useState } from "react";
import Box from "@mui/material/Box";
import { BuildingTopbar } from "./side-menus/building-topbar";
import { CssBaseline } from "@mui/material";
import { BuildingDrawer } from "./side-menus/building-drawer";
import { getDrawerHeader } from "./side-menus/mui-utils";
import { useAppContext } from "../../middleware/context-provider";
import { Navigate } from "react-router-dom";
import { BuildingFrontMenu } from "./front-menu/building-front-menu";
import { FrontMenuMode } from "./front-menu/types";
import { BuildingViewport } from "./building-viewport/building-viewport";
import { BuildingBottomMenu } from "./bottom-menu/building-bottom-menu";

export const BuildingViewer: FC = () => {
  const [width] = useState(240);
  const [sideOpen, setSideOpen] = useState(false);
  const [frontOpen, setFrontOpen] = useState(false);
  const [frontMenu, setFrontMenu] = useState<FrontMenuMode>("BuildingInfo");

  const [{ building, user }] = useAppContext();

  if (!building) {
    return <Navigate to="/map" />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  const toggleFrontMenu = (active = !frontOpen, mode?: FrontMenuMode) => {
    if (mode) {
      setFrontMenu(mode);
    }
    setFrontOpen(active);
  };

  const toggleDrawer = (active: boolean) => {
    setSideOpen(active);
  };

  const DrawerHeader = getDrawerHeader();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <BuildingTopbar
        width={width}
        open={sideOpen}
        onOpen={() => toggleDrawer(true)}
      />

      <BuildingDrawer
        width={width}
        open={sideOpen}
        onClose={() => toggleDrawer(false)}
        onToggleMenu={toggleFrontMenu}
      />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <BuildingViewport />

        <BuildingFrontMenu
          onToggleMenu={toggleFrontMenu}
          open={frontOpen}
          mode={frontMenu}
        />

        <BuildingBottomMenu />
      </Box>
    </Box>
  );
};
