import React from "react";
import { Button, Typography, Box, Container, Grid } from "@mui/material";

const GameEndComponent = ({ playerWon }) => {
  const restartGame = () => window.location.reload();
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">
              {playerWon ? (
                <strong>You Won!</strong>
              ) : (
                <strong>You Lost!</strong>
              )}
            </Typography>
            <br />
            <Button onClick={restartGame} variant="outlined">
              Restart Game
            </Button>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default GameEndComponent;
