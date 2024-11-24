import { useReducer } from "react";
import { GameAction, GameEnd, GameState, SquareValue } from "../../types/types";
import { Field } from "../Field";
import { UI } from "../UI";
import styles from "./Game.module.css";
import { GameContext } from "../../context/GameContext";
import { initialState } from "../../constants/initialState";

const calculateGameEnd = (
  squares: SquareValue[],
  fullness: number
): GameEnd => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return "Win";
    }
  }
  if (fullness === squares.length) {
    return "Draw";
  }
  return null;
};

const gameReducer = (state = initialState, action: GameAction): GameState => {
  switch (action.type) {
    case "MAKE_MOVE": {
      if (state.gameEnd || state.squares[action.index]) {
        return state;
      }
      const newSquares = [...state.squares];
      newSquares[action.index] = state.xIsNext ? "X" : "O";
      const newFullness = state.fullness + 1;
      const newGameEnd = calculateGameEnd(newSquares, newFullness);
      return {
        squares: newSquares,
        xIsNext: newGameEnd ? state.xIsNext : !state.xIsNext,
        gameEnd: newGameEnd,
        fullness: newFullness,
      };
    }
    case "RESET_GAME": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  return (
    <div className={styles.game}>
      <GameContext.Provider value={{ state, dispatch }}>
        <UI />
        <div className={styles.divider} />
        <Field />
      </GameContext.Provider>
    </div>
  );
};
