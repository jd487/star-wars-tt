import React, { useState, useContext } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Box,
  Grid,
  Button,
} from "@mui/material";
import GameContext from "../context/gameContext";
import SnackbarComponent from "./SnackBarComponent";
import logo from "../images/logo.png";

const CardComponent = ({ data, player }) => {
  const [openWinSnackbar, setOpenWinSnackbar] = useState(false);
  const [openLoseSnackbar, setOpenLoseSnackbar] = useState(false);
  const [openDrawSnackbar, setOpenDrawSnackbar] = useState(false);

  const gameContext = useContext(GameContext);

  const onClickStatistic = (e) => {
    let playerCard = gameContext.playerDeck[0];
    let computerCard = gameContext.computerDeck[0];
    if (
      parseInt(playerCard[e.target.name]) >
      parseInt(computerCard[e.target.name])
    ) {
      setOpenWinSnackbar(true);
      gameContext.revealComputerStatistic(e.target.name);
      setTimeout(() => {
        gameContext.updateScore("success", computerCard["name"]);
      }, 2500);
    }
    if (
      parseInt(playerCard[e.target.name]) <
      parseInt(computerCard[e.target.name])
    ) {
      gameContext.revealComputerStatistic(e.target.name);
      setOpenLoseSnackbar(true);
      setTimeout(() => {
        gameContext.updateScore("lost", playerCard["name"]);
      }, 2500);
    }
    if (playerCard[e.target.name] === computerCard[e.target.name]) {
      gameContext.revealComputerStatistic(e.target.name);
      setOpenDrawSnackbar(true);
      setTimeout(() => {
        gameContext.updateScore("draw", playerCard["name"]);
      }, 2500);
    }
  };

  return (
    <>
      <Card sx={{ bgcolor: "#E1D9D1", maxWidth: "500px" }} elevation={3}>
        <CardHeader sx={{ bgcolor: "#FFC625" }} title={data[0]?.name} />
        <CardMedia component="img" image={logo} height="220" />
        <CardContent>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button
                  onClick={onClickStatistic}
                  fullWidth
                  variant="outlined"
                  name="max_atmosphering_speed"
                  disabled={
                    data[0]?.max_atmosphering_speed === "unknown" ||
                    data[0]?.max_atmosphering_speed === "n/a"
                  }
                >
                  {gameContext.chosenStat !== "max_atmosphering_speed" &&
                  !player
                    ? "?"
                    : `Max Speed: ${data[0]?.max_atmosphering_speed}`}
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  name="cost_in_credits"
                  onClick={onClickStatistic}
                  fullWidth
                  disabled={
                    data[0]?.cost_in_credits === "unknown" ||
                    data[0]?.cost_in_credits === "n/a"
                  }
                  variant="outlined"
                >
                  {gameContext.chosenStat !== "cost_in_credits" && !player
                    ? "?"
                    : `Cost In Credits: ${data[0]?.cost_in_credits}`}
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={onClickStatistic}
                  name="passengers"
                  disabled={
                    data[0]?.passengers === "unknown" ||
                    data[0]?.passengers === "n/a"
                  }
                  fullWidth
                  variant="outlined"
                >
                  {gameContext.chosenStat !== "passengers" && !player
                    ? "?"
                    : `passengers: ${data[0]?.passengers}`}
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={onClickStatistic}
                  fullWidth
                  name="crew"
                  variant="outlined"
                  disabled={
                    data[0]?.crew === "unknown" || data[0]?.crew === "n/a"
                  }
                >
                  {gameContext.chosenStat !== "crew" && !player
                    ? "?"
                    : `Crew: ${data[0]?.crew}`}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
      <SnackbarComponent
        open={openWinSnackbar}
        message="You won this hand!"
        severity="success"
        handleClose={() => setOpenWinSnackbar(false)}
      />
      <SnackbarComponent
        open={openLoseSnackbar}
        message="You lost this hand!"
        severity="error"
        handleClose={() => setOpenLoseSnackbar(false)}
      />
      <SnackbarComponent
        open={openDrawSnackbar}
        message="Draw! Pick another category."
        severity="warning"
        handleClose={() => setOpenDrawSnackbar(false)}
      />
    </>
  );
};

export default CardComponent;
