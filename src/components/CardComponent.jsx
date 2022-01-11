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
  const [touched, setTouched] = useState(false);
  const [openWinSnackbar, setOpenWinSnackbar] = useState(false);
  const [openLoseSnackbar, setOpenLoseSnackbar] = useState(false);
  const [openDrawSnackbar, setOpenDrawSnackbar] = useState(false);

  const gameContext = useContext(GameContext);

  const onClickStatistic = (e) => {
    let playerCard = gameContext.playerDeck[0];
    let computerCard = gameContext.computerDeck[0];
    if (playerCard[e.target.name] > computerCard[e.target.name]) {
      setOpenWinSnackbar(true);
      gameContext.updateScore("success", computerCard["name"]);
    }
    if (playerCard[e.target.name] < computerCard[e.target.name]) {
      setOpenLoseSnackbar(true);
      gameContext.updateScore("lost", playerCard["name"]);
    }
    if (playerCard[e.target.name] === computerCard[e.target.name]) {
      setOpenDrawSnackbar(true);
    }
  };

  return (
    <>
      <Card sx={{ bgcolor: "#E1D9D1", maxWidth: "500px" }} elevation={3}>
        <CardHeader sx={{ bgcolor: "#FFC625" }} title={data[0].name} />
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
                >
                  {!player && !touched
                    ? "?"
                    : `Max Speed: ${data[0].max_atmosphering_speed}`}
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  name="cost_in_credits"
                  onClick={onClickStatistic}
                  fullWidth
                  variant="outlined"
                >
                  {!player && !touched
                    ? "?"
                    : `Cost In Credits: ${data[0].cost_in_credits}`}
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={onClickStatistic}
                  name="passengers"
                  fullWidth
                  variant="outlined"
                >
                  {!player && !touched
                    ? "?"
                    : `Passengers: ${data[0].passengers}`}
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={onClickStatistic}
                  fullWidth
                  name="crew"
                  variant="outlined"
                >
                  {!player && !touched
                    ? "?"
                    : `Number Of Crew: ${data[0].crew}`}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
      <SnackbarComponent
        open={openWinSnackbar}
        message="You won this hand!"
        autoHideDuration={2000}
        severity="success"
        handleClose={() => setOpenWinSnackbar(false)}
      />
      <SnackbarComponent
        open={openLoseSnackbar}
        message="You lost this hand!"
        severity="error"
        autoHideDuration={2000}
        handleClose={() => setOpenLoseSnackbar(false)}
      />
      <SnackbarComponent
        open={openDrawSnackbar}
        message="Draw!"
        severity="warning"
        handleClose={() => setOpenDrawSnackbar(false)}
      />
    </>
  );
};

export default CardComponent;
