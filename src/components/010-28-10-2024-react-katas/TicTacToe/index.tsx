import { Game } from "./components/Game";
import styles from "./TicTacToe.module.css";

export const TicTacToe = () => (
  <div className={styles.tictactoe}>
    <h1 className={styles.title}>Игра Крестики-нолики</h1>
    <div className={styles.game_container}>
      <Game />
    </div>
  </div>
);
