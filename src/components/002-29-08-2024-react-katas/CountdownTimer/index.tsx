import { useEffect, useRef, useState } from "react";
import styles from "./CountdownTimer.module.css";

interface CountdownTimerProps {
  seconds: number;
  onFinish: () => void;
}

export const CountdownTimer = ({
  seconds = 120,
  onFinish = () => console.log("timer end"),
}: CountdownTimerProps) => {
  const [countdown, setCountdown] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setCountdown(seconds);
    intervalRef.current = setInterval(() => {
      setCountdown((cd) => Math.max(cd - 1, 0));
    }, 1000);
    return () => {
      clearInterval(intervalRef.current !== null ? intervalRef.current : 0);
      onFinish();
    };
  }, [seconds, onFinish]);

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(intervalRef.current !== null ? intervalRef.current : 0);
      onFinish();
    }
  }, [countdown, onFinish]);

  return (
    <div className={styles.container}>
      {Math.floor(countdown / 60)
        .toString()
        .padStart(2, "0")}
      :{(countdown % 60).toString().padStart(2, "0")}
    </div>
  );
};
