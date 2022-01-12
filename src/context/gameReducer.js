import {
  START_GAME,
  SET_LOADING,
  PLAYER_WON,
  PLAYER_LOST,
  REVEAL_COMPUTER_SCORE,
} from "./types/types";

export const gameReducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        computerDeck: action.payload[0],
        playerDeck: action.payload[1],
        loading: false,
      };
    case PLAYER_WON:
      return {
        ...state,
        playerScore: state.playerScore + 1,
        computerDeck: state.computerDeck.filter(
          (starship) => starship.name !== action.payload
        ),
        chosenStat: null,
        loading: true,
      };
    case PLAYER_LOST:
      return {
        ...state,
        computerScore: state.computerScore + 1,
        playerDeck: state.playerDeck.filter(
          (starship) => starship.name !== action.payload
        ),
        chosenStat: null,
        loading: true,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REVEAL_COMPUTER_SCORE:
      return {
        ...state,
        chosenStat: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};
