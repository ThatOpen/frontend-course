import { FC, useRef, useEffect, useState } from "react";
import { useAppContext } from "../../../middleware/context-provider";

export const BuildingViewport: FC = () => {
  const [state, dispatch] = useAppContext();
  const containerRef = useRef(null);
  const { user } = state;

  useEffect(() => {
    const container = containerRef.current;
    if (container && user) {
      dispatch({ type: "START_BUILDING", payload: container });
    }
  }, []);

  return (
    <>
      <div className="full-screen" ref={containerRef} />
    </>
  );
};
