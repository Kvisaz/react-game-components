import React from "react";

interface LinkProps {
  href: string;
  text: string;
}

export const Link = React.memo(
  ({ href, text }: LinkProps) => {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.href === nextProps.href && prevProps.text === nextProps.text
    );
  }
);
