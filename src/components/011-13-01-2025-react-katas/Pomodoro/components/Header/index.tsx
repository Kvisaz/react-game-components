import styles from "./Header.module.css";
interface HeaderProps {
  leftIsActive: boolean;
  handleClick: () => void;
}
export const Header = ({ leftIsActive, handleClick }: HeaderProps) => {
  return (
    <header className={styles.container}>
      <button
        className={styles.left + (leftIsActive ? " " + styles.active : "")}
        onClick={handleClick}
      >
        Pomodoro
      </button>
      <button
        className={styles.right + (leftIsActive ? "" : " " + styles.active)}
        onClick={handleClick}
      >
        Логи
      </button>
    </header>
  );
};
