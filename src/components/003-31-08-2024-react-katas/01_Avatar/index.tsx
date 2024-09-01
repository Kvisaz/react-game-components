import React from "react";
import styles from "./Avatar.module.css";

interface AvatarProps {
  size: number;
  name: string;
}

export const Avatar = React.memo(
  ({ size = 50, name = "KOfW" }: AvatarProps) => {
    if (name.length === 0) {
      name = "O";
    }
    const inlineStyles: { [key: string]: React.CSSProperties } = {
      avatar: {
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${size - Math.floor(0.64 * size)}px`,
      },
    };
    return (
      <div className={styles.avatar} style={inlineStyles.avatar}>
        {name[0].toUpperCase()}
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.name === nextProps.name && prevProps.size === nextProps.size
    );
  }
);
