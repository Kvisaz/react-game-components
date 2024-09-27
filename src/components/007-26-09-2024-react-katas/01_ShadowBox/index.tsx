import React from "react";
import styles from "./ShadowBox.module.css";

interface ShadowBoxProps {
  children: React.ReactNode;
}
export const ShadowBox = ({ children }: ShadowBoxProps) => {
  return <div className={styles.shadow}>{children}</div>;
};
