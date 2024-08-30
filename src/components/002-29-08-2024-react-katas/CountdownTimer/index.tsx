import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";

interface CountdownTimerProps {
  seconds: number;
}

export const CountdownTimer = ({ seconds = 120 }: CountdownTimerProps) => {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    setCountdown(seconds);
    const interval = setInterval(() => {
      setCountdown((cd) => Math.max(cd - 1, 0));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <div className={styles.container}>
      {Math.floor(countdown / 60)
        .toString()
        .padStart(2, "0")}
      :{(countdown % 60).toString().padStart(2, "0")}
    </div>
  );
};
