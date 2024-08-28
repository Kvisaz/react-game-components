import { createElement } from "react";

interface HeadingProps {
  text: string;
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = ({
  text = "Mой заголовок",
  headingLevel = "h1",
}: HeadingProps) => {
  return createElement(headingLevel, null, text);
};
