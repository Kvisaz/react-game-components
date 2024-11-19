import { useContext } from "react";
import styles from "./UI.module.css";
import { GameContext } from "../../context/GameContext";

export const UI = () => {
  const { state, dispatch } = useContext(GameContext);
  const player = state.xIsNext ? "Крестик" : "Нолик";
  const status =
    state.gameEnd === "Win"
      ? `Победил ирок: ${player}и!`
      : state.gameEnd === "Draw"
        ? "Ничья!"
        : `Очередь хода: ${player}ов`;
  const handleRestart = () => {
    dispatch({ type: "RESET_GAME" });
  };

  return (
    <div className={styles.ui}>
      <div className={styles.status}>{status}</div>
      <button
        className={styles.btnRestart}
        onClick={() => {
          handleRestart();
        }}
      >
        Новая Игра
      </button>
    </div>
  );
};
