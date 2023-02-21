import { FC } from "react";
import "./user-styles.css";
import { Box, Button } from "@mui/material";
import { useAppContext } from "../../middleware/context-provider";

export const LoginPage: FC = () => {
  const dispatch = useAppContext()[1];

  const onLoginClick = () => {
    dispatch({ type: "LOGIN" });
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img className="landing-logo" alt="ifcjs logo" src="ifcjs-logo.png" />

      <Button variant="outlined" onClick={onLoginClick}>
        Click here to log in.
      </Button>
    </Box>
  );
};
