export type SquareValue = "X" | "O" | null;
export type GameEnd = "Win" | "Draw" | null;

export interface GameState {
  squares: SquareValue[];
  xIsNext: boolean;
  gameEnd: GameEnd;
  fullness: number;
}

export type GameAction =
  | { type: "MAKE_MOVE"; index: number }
  | { type: "RESET_GAME" };

export interface GameContextValue {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
}
