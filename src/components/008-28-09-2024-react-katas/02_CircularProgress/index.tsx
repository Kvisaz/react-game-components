import React from "react";
import styles from "./CircularProgress.module.css";

interface CircularProgressProps {
  value: number;
}

export const CircularProgress = ({ value }: CircularProgressProps) => {
  return (
    <div
      className={styles.progress}
      style={
        {
          "--progress-value": (value < 0 ? 0 : value > 100 ? 100 : value) + "%",
        } as React.CSSProperties
      }
    />
  );
};
