interface UnderlineTextProps {
  text: string;
}

export const UnderlineText = ({ text }: UnderlineTextProps) => {
  return <span style={{ textDecoration: "underline" }}>{text}</span>;
};
