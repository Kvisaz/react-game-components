import { GameState } from "../types/types";

export const initialState:  GameState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  gameEnd: null,
  fullness: 0,
};
