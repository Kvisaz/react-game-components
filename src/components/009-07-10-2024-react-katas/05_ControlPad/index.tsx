import {
  faArrowUp,
  faArrowLeft,
  faArrowDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ControlPad.module.css";
import { useEffect, useState } from "react";

interface ControlPadProps {
  onClick: (direction: "up" | "right" | "down" | "left") => void;
}

export const ControlPad = ({ onClick }: ControlPadProps) => {
  const [upIsActive, setUpIsActive] = useState<boolean>(false);
  const [rightIsActive, setRightIsActive] = useState<boolean>(false);
  const [downIsActive, setDownIsActive] = useState<boolean>(false);
  const [leftIsActive, setLeftIsActive] = useState<boolean>(false);

  const handleKeyInteraction = (event: KeyboardEvent) => {
    switch (event.key) {
      case "ArrowUp":
      case "w":
        setUpIsActive(event.type === "keydown");
        break;
      case "ArrowRight":
      case "d":
        setRightIsActive(event.type === "keydown");
        break;
      case "ArrowDown":
      case "s":
        setDownIsActive(event.type === "keydown");
        break;
      case "ArrowLeft":
      case "a":
        setLeftIsActive(event.type === "keydown");
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyInteraction);
    window.addEventListener("keyup", handleKeyInteraction);
    return () => {
      window.removeEventListener("keydown", handleKeyInteraction);
      window.removeEventListener("keyup", handleKeyInteraction);
    };
  }, []);

  return (
    <div className={styles.grid_container}>
      <button
        onClick={() => onClick("up")}
        className={
          styles.button +
          " " +
          styles.buttonUp +
          (upIsActive ? " " + styles.active : "")
        }
      >
        <FontAwesomeIcon icon={faArrowUp} size={"2x"} />
      </button>
      <button
        onClick={() => onClick("right")}
        className={
          styles.button +
          " " +
          styles.buttonRight +
          (rightIsActive ? " " + styles.active : "")
        }
      >
        <FontAwesomeIcon icon={faArrowRight} size={"2x"} />
      </button>
      <button
        onClick={() => onClick("down")}
        className={
          styles.button +
          " " +
          styles.buttonDown +
          (downIsActive ? " " + styles.active : "")
        }
      >
        <FontAwesomeIcon icon={faArrowDown} size={"2x"} />
      </button>
      <button
        onClick={() => onClick("left")}
        className={
          styles.button +
          " " +
          styles.buttonLeft +
          (leftIsActive ? " " + styles.active : "")
        }
      >
        <FontAwesomeIcon icon={faArrowLeft} size={"2x"} />
      </button>
    </div>
  );
};
