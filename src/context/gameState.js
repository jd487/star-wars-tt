import React, { useReducer } from "react";
import GameReducer from "./gameReducer";
import { deckShuffle } from "../util/UtilFunctions";
import { getStarWarsTopTrumpData } from "../api/useGetStarWarsTopTrumpsData";
import {
  START_GAME,
  SET_LOADING,
  PLAYER_WON,
  PLAYER_LOST,
  PLAYER_DRAW,
} from "./types/types";
import GameContext from "./gameContext";

const GameState = (props) => {
  const initialState = {
    playerDeck: [],
    computerDeck: [],
    playerScore: 0,
    computerScore: 0,
    loading: false,
  };

  const [state, dispatch] = useReducer(GameReducer, initialState);

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
        loading: state.loading,
        startGame,
        updateScore,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
