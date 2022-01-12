import React, { useState, useEffect, useContext } from "react";
import StartGameFormComponent from "./StartGameFormComponent.jsx";
import { Container, Box, Grid, Typography } from "@mui/material";
import CardComponent from "./CardComponent.jsx";
import GameContext from "../context/gameContext";
import GameEndComponent from "./GameEndComponent.jsx";

const ControlPanelComponent = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!playing && (
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
      )}
      {gameContext.playerScore !== 5 &&
        gameContext.computerScore !== 5 &&
        playing && (
          <>
            <Container style={{ marginTop: "30px", marginBottom: "30px" }}>
              <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xs={12} sm={6}>
                  <Typography>
                    {name}'s Score: {`${gameContext.playerScore}`}
                  </Typography>
                  <br />
                  <CardComponent data={gameContext.playerDeck} player={true} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    Computer's Score: {`${gameContext.computerScore}`}
                  </Typography>
                  <br />
                  <CardComponent
                    data={gameContext.computerDeck}
                    player={false}
                  />
                </Grid>
              </Grid>
            </Container>
          </>
        )}
      {gameContext.playerScore === 5 && <GameEndComponent playerWon={true} />}
      {gameContext.playerDeck === 5 && <GameEndComponent playerWon={false} />}
    </>
  );
};

export default ControlPanelComponent;
