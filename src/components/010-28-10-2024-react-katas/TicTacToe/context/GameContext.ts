import { createContext } from "react";
import { GameContextValue } from "../types/types";
import { initialState } from "../constants/initialState";

export const GameContext = createContext<GameContextValue>({
  state: initialState,
  dispatch: () => undefined,
});
