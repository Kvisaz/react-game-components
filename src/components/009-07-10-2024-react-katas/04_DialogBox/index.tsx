import styles from "./DialogBox.module.css";

interface DialogBoxProps {
  onOkClick: () => void;
  text: string;
}

export const DialogBox = ({ onOkClick, text }: DialogBoxProps) => {
  return (
    <div className={styles.dialog_box}>
      <div className={styles.text}>{text}</div>
      <button
        className={styles.button}
        onClick={() => {
          onOkClick();
        }}
      >
        Ok
      </button>
    </div>
  );
};
