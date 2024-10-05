import styles from "./DividerWithText.module.css";

interface DividerWithTextProps {
  text: string;
}

export const DividerWithText = ({ text }: DividerWithTextProps) => {
  return <span className={styles.divider}>{text}</span>;
};
