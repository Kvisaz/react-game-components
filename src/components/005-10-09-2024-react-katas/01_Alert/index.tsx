import styles from "./Alert.module.css";

interface AlertProps {
  text: string;
}

const defaultProps: AlertProps = {
  text: "Это важное сообщение!",
};

export const Alert = ({ text = defaultProps.text }: AlertProps) => {
  return (
    <div className={styles["container"]}>
      <button
        onClick={() => {
          console.log(
            "Компонент должен закрыться, если ему сюда передать специальный кэлбэк от родителя."
          );
        }}
        className={styles["close-button"]}
      >
        Close
      </button>
      <div className={styles["content"]}>
        <p className={styles["text"]}>{text}</p>
      </div>
    </div>
  );
};
