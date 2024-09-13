import React from "react";
import styles from "./OnlineStatus.module.css";

interface OnlineStatusProps {
  isOnline: boolean;
}

export const OnlineStatus = ({ isOnline }: OnlineStatusProps) => {
  const inlineStyle = {
    "--color": isOnline ? "green" : "red",
  } as React.CSSProperties;
  return <div className={styles.box} style={inlineStyle}></div>;
};
