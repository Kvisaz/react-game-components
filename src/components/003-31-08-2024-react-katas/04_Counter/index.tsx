import React from "react";

interface CounterProps {
  count: number;
  fontSize?: number;
}

export const Counter = React.memo(
  ({ count = 1, fontSize = 5 }: CounterProps) => {
    return <div style={{ fontSize: `${fontSize}em` }}>{count}</div>;
  },
  (prevProps, nextProps) => {
    return (
      prevProps.count === nextProps.count &&
      prevProps.fontSize === nextProps.fontSize
    );
  }
);
