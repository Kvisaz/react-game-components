import styles from "./Badge.module.css";

interface BadgeProps {
  text: string;
}

export const Badge = ({ text = "Новое!" }: BadgeProps) => {
  return <span className={styles.badge}>{text}</span>;
};
