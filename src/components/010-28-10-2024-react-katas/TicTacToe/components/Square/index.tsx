import { SquareValue } from "../../types/types";
import styles from "./Square.module.css";

interface SquareProps {
  value: SquareValue;
  index: number;
  handleClick: (index: number) => void;
}

export const Square = ({ value, index, handleClick }: SquareProps) => {
  return (
    <div
      className={styles.square}
      onClick={() => {
        handleClick(index);
      }}
    >
      {value ? value : ""}
    </div>
  );
};
