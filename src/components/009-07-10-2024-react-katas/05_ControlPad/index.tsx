import {
  faArrowUp,
  faArrowLeft,
  faArrowDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ControlPad.module.css";
import { useEffect, useState } from "react";

type Direction = "up" | "right" | "down" | "left";
type ClickHandler = (direction: Direction) => void;

interface ControlPadProps {
  onClick: ClickHandler;
}

interface ControlButtonProps {
  dir: Direction;
  onClick: ClickHandler;
  isActive: boolean;
}

const iconDirections = {
  up: faArrowUp,
  right: faArrowRight,
  down: faArrowDown,
  left: faArrowLeft,
};

const ControlButton = ({ dir, onClick, isActive }: ControlButtonProps) => (
  <button
    onClick={() => onClick(dir)}
    className={`${styles.button} ${styles[dir]}${isActive ? " " + styles.active : ""}`}
  >
    <FontAwesomeIcon icon={iconDirections[dir]} size={"2x"} />
  </button>
);

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
      <ControlButton dir={"up"} onClick={onClick} isActive={upIsActive} />
      <ControlButton dir={"right"} onClick={onClick} isActive={rightIsActive} />
      <ControlButton dir={"down"} onClick={onClick} isActive={downIsActive} />
      <ControlButton dir={"left"} onClick={onClick} isActive={leftIsActive} />
    </div>
  );
};
