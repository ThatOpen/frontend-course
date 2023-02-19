import { FC, useState } from "react";
import { Button } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../middleware/context-provider";

export const BuildingViewer: FC = () => {
  const [state, dispatch] = useAppContext();
  const { building } = state;

  const onGoToMap = () => {
    dispatch({ type: "CLOSE_BUILDING" });
  };

  if (!building) {
    return <Navigate to="/map" />;
  }

  return (
    <>
      <h1>Hello building viewer!</h1>
      <Button onClick={onGoToMap}>Map view</Button>
    </>
  );
};
