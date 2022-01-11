import React, { useContext } from "react";
import { Button, TextField, Box, CircularProgress } from "@mui/material";
import GameContext from "../context/gameContext";

const StartGameFormComponent = ({ name, onNameChange, onChangePlaying }) => {
  const gameContext = useContext(GameContext);
  return (
    <>
      <Box sx={{ mt: 1 }}>
        {gameContext.loading ? (
          <CircularProgress />
        ) : (
          <>
            <TextField
              margin="normal"
              onChange={onNameChange}
              required
              fullWidth
              label="Name"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!name}
              onClick={onChangePlaying}
            >
              Play
            </Button>
          </>
        )}
      </Box>
    </>
  );
};

export default StartGameFormComponent;
