import styles from "./Timer.module.css";
import { formatTime } from "../../utils/pomodoroUtils";
import { ITimerState } from "../../interfaces/interfaces";

interface TimerProps {
  timerState: ITimerState;
  setTimer: (selection?: number) => void;
  toggleTimer: () => void;
  resetTimer: () => void;
}

export const Timer = ({ timerState, setTimer, toggleTimer, resetTimer }: TimerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.timings_box}>
        {timerState.builtInLimits.map((limit, index) => (
          <button
            key={index}
            onClick={() => {
              setTimer(limit);
            }}
            className={styles.button_set}
          >
            {limit} min
          </button>
        ))}
      </div>
      <div className={styles.time}>{formatTime(timerState.timeLeft)}</div>
      <div className={styles.timer_buttons}>
        <button onClick={toggleTimer} className={styles.button_toggle}>
          {timerState.isActive ? "Пауза" : "Старт"}
        </button>
        <button
          onClick={() => {
            resetTimer();
          }}
          className={styles.button_reset}
        >
          Сброс
        </button>
      </div>
    </div>
  );
};
