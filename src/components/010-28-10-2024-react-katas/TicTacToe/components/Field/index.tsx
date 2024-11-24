import { useContext } from "react";
import { Square } from "../Square";
import styles from "./Field.module.css";
import { GameContext } from "../../context/GameContext";

export const Field = () => {
  const { state, dispatch } = useContext(GameContext);
  const handleClick = (index: number) => {
    dispatch({ type: "MAKE_MOVE", index });
  };
  return (
    <div className={styles.field}>
      {state.squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          index={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
