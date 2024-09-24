import styles from "./Quote.module.css";

interface QuoteProps {
  text: string;
  author: string;
}

export const Quote = ({ text, author }: QuoteProps) => {
  return (
    <blockquote className={styles.quote}>
      <p>{text}</p>
      <footer className={styles.author}>{author}</footer>
    </blockquote>
  );
};
