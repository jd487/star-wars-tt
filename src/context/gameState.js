import React, { useReducer } from "react";
import { gameReducer } from "./gameReducer";
import { deckShuffle } from "../util/UtilFunctions";
import { getStarWarsTopTrumpData } from "../api/useGetStarWarsTopTrumpsData";
import {
  START_GAME,
  SET_LOADING,
  PLAYER_WON,
  PLAYER_LOST,
  PLAYER_DRAW,
  REVEAL_COMPUTER_SCORE,
} from "./types/types";
import GameContext from "./gameContext";

const GameState = (props) => {
  const initialState = {
    playerDeck: [],
    computerDeck: [],
    playerScore: 0,
    computerScore: 0,
    chosenStat: "",
    loading: false,
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const startGame = async () => {
    let response;
    setLoading();
    response = await getStarWarsTopTrumpData();
    response = deckShuffle(response.data.results);
    dispatch({
      type: START_GAME,
      payload: response,
    });
  };

  const revealComputerStatistic = (statName) => {
    setLoading();
    dispatch({
      type: REVEAL_COMPUTER_SCORE,
      payload: statName,
    });
  };

  const updateScore = async (result, starshipName) => {
    switch (result) {
      case "success":
        dispatch({
          type: PLAYER_WON,
          payload: starshipName,
        });
        break;
      case "lost":
        dispatch({
          type: PLAYER_LOST,
          payload: starshipName,
        });
        break;

      default:
        dispatch({
          type: PLAYER_DRAW,
        });
        break;
    }
  };

  return (
    <GameContext.Provider
      value={{
        playerDeck: state.playerDeck,
        computerDeck: state.computerDeck,
        playerScore: state.playerScore,
        computerScore: state.computerScore,
        chosenStat: state.chosenStat,
        loading: state.loading,
        startGame,
        updateScore,
        revealComputerStatistic,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
