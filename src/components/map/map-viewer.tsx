import { FC, useRef, useEffect, useState } from "react";
import { LogOutButton } from "../user/logout-button";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../middleware/context-provider";
import { Button } from "@mui/material";
import "./map-viewer.css";

export const MapViewer: FC = () => {
  const [state, dispatch] = useAppContext();
  const containerRef = useRef(null);
  const thumbnailRef = useRef(null);
  const [isCreating, setIsCreating] = useState(false);
  const { user, building } = state;

  const onToggleCreate = () => {
    setIsCreating(!isCreating);
  };

  const onCreate = () => {
    if (isCreating) {
      dispatch({ type: "ADD_BUILDING", payload: user });
      setIsCreating(false);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container && user) {
      const thumbnail = thumbnailRef.current;
      dispatch({ type: "START_MAP", payload: { container, user, thumbnail } });
    }

    return () => {
      dispatch({ type: "REMOVE_MAP" });
    };
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (building) {
    const url = `/building/?id=${building}`;
    return <Navigate to={url} />;
  }

  return (
    <>
      <div
        className="full-screen"
        onContextMenu={onCreate}
        ref={containerRef}
      />
      {isCreating && (
        <div className="overlay">
          <p>Right click to create a new building or</p>
          <Button onClick={onToggleCreate}>cancel</Button>
        </div>
      )}
      <div className="top-navbar">
        <h1>Hello map viewer!</h1>
        <Button onClick={onToggleCreate}>Create building</Button>
        <LogOutButton />
      </div>
    </>
  );
};
