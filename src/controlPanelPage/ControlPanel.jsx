import React, { useState, useEffect, useContext } from "react";
import StartGameFormComponent from "../components/StartGameFormComponent.jsx";
import { Container, Box, Grid, Typography } from "@mui/material";
import CardComponent from "../components/CardComponent.jsx";
import GameContext from "../context/gameContext";

// Notes: Again, components would of been split down further, and I would of created
// a state/props flow allow custom button text/sizing if I was reusing

const ControlPanel = () => {
  const [playing, setPlaying] = useState(false);
  const [name, setName] = useState(null);

  const gameContext = useContext(GameContext);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onChangePlaying = () => {
    setPlaying(true);
  };

  useEffect(() => {
    gameContext.startGame();
  }, []);

  return (
    <>
      {!playing ? (
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <StartGameFormComponent
              name={name}
              onNameChange={onNameChange}
              onChangePlaying={onChangePlaying}
            />
          </Box>
        </Container>
      ) : (
        <>
          <Container style={{ marginTop: "30px", marginBottom: "30px" }}>
            <Grid container spacing={2} alignItems="center" justify="center">
              <Grid item xs={12} sm={6}>
                <Typography color="inherit">
                  {name}'s Score: {`${gameContext.playerScore}`}
                </Typography>
                <br />
                <CardComponent data={gameContext.playerDeck} player={true} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography color="inherit">
                  Computer's Score: {`${gameContext.computerScore}`}
                </Typography>
                <br />
                <CardComponent data={gameContext.computerDeck} player={false} />
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};

export default ControlPanel;
