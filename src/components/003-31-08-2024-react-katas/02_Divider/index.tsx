import React, { useMemo } from "react";

interface DividerProps {
  color: string;
  height: number;
  widthPercent?: number;
  centered?: boolean;
}

/***
 * В качестве HTML тэга выбран <hr/>.
 * Он семантически лучше, поскольку предназначен для визуального деления полоской контента или текста.
 * Роль Divider именно в вышеописанном, поэтому <hr/> лучше обычного <div></div>.
 * Для визуальной декорации линиями без практической пользы можно использовать обычный <div></div>
 */

export const Divider = React.memo(
  ({
    color = "#6a6868",
    height = 5,
    widthPercent = 100,
    centered = true,
  }: DividerProps) => {
    const borderRadius = useMemo(
      () => `${Math.floor(height * 0.5)}px`,
      [height]
    );
    const isCentered = useMemo(() => (centered ? "auto" : 0), [centered]);
    const inlineStyle: React.CSSProperties = {
      backgroundColor: color,
      height: `${height}px`,
      width: `${widthPercent}%`,
      borderWidth: 0,
      borderRadius,
      marginLeft: isCentered,
      marginRight: isCentered,
    };
    return <hr style={inlineStyle} />;
  },
  (prevProps: DividerProps, nextProps: DividerProps) => {
    return (
      prevProps.color === nextProps.color &&
      prevProps.height === nextProps.height &&
      prevProps.widthPercent === nextProps.widthPercent &&
      prevProps.centered === nextProps.centered
    );
  }
);
