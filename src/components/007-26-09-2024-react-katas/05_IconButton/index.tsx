import React from "react";
import styles from "./IconButton.module.css";

interface IconButton {
  icon: React.ReactNode;
  onClick: () => void;
}

export const IconButton = ({ icon, onClick }: IconButton) => {
  return (
    <button
      className={styles.button}
      onClick={() => {
        onClick();
      }}
    >
      {icon}
    </button>
  );
};
