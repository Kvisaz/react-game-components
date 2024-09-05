import { useState } from "react";
import styles from "./TrafficLight.module.css";

enum lightColor {
  Red = "RED",
  Yellow = "YELLOW",
  Green = "GREEN",
}

export const TrafficLight = () => {
  const [currentColor, setCurrentColor] = useState(lightColor.Red);
  const notActive: string = styles["ball__no-active"];
  const handleClick = () => {
    setCurrentColor((color) =>
      color === lightColor.Red
        ? lightColor.Yellow
        : color === lightColor.Yellow
          ? lightColor.Green
          : lightColor.Red
    );
  };

  return (
    <div className={styles["traffic-light"]}>
      <div className={styles.container}>
        <div
          className={
            `${styles.ball} ${styles.red}` +
            (currentColor === lightColor.Red ? "" : ` ${notActive}`)
          }
        ></div>
        <div
          className={
            `${styles.ball} ${styles.yellow}` +
            (currentColor === lightColor.Yellow ? "" : ` ${notActive}`)
          }
        ></div>
        <div
          className={
            `${styles.ball} ${styles.green}` +
            (currentColor === lightColor.Green ? "" : ` ${notActive}`)
          }
        ></div>
      </div>
      <button type="button" onClick={handleClick}>
        Swith
      </button>
    </div>
  );
};
