import { FC } from "react";
import * as React from "react";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import { getAppBar } from "./mui-utils";

export const BuildingTopbar: FC<{
  open: boolean;
  onOpen: () => void;
  width: number;
}> = (props) => {
  const { open, onOpen, width } = props;

  const AppBar = getAppBar(width);

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Building viewer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
