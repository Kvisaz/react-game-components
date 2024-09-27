import React from "react";
import styles from "./Tooltip.module.css";

interface Tooltip {
  position?: "top" | "right" | "bottom" | "left";
  text: string;
  children: React.ReactNode;
}

export const Tooltip = ({
  position = "top",
  text = "This is a tip!",
  children,
}: Tooltip) => {
  return (
    <div className={styles.box}>
      {children}
      <div className={styles.tip + " " + styles[position]}>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
};
