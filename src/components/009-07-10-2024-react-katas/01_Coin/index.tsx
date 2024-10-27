import styles from "./Coin.module.css";

interface CoinProps {
  value: number;
}

export const Coin = ({ value }: CoinProps) => {
  return (
    <div className={styles.border}>
      <div className={styles.coin}>{value}</div>
    </div>
  );
};
