import styles from "./Pomodoro.module.css";
import "./styles/Pomodoro.css";

import { useState } from "react";
import { Header } from "./components/Header";
import { Timer } from "./components/Timer";
import { Log } from "./components/Log";
import { useTimerState } from "./hooks/useTimerState";
import { ILog, ITimerState } from "./interfaces/interfaces";
import { useTimerWork } from "./hooks/useTimerWork";
import { MainLogs } from "./components/MainLogs";
import { useLogs } from "./hooks/useLogs";

const defaultTimerState: ITimerState = {
  timeLeft: 5,
  resetLimit: 5,
  startNumber: 5,
  isActive: false,
  builtInLimits: [5, 15, 30],
  userLimit: 0,
};

// const testLogs: Array<ILog> = {};

export const Pomodoro = () => {
  const [appSwitch, setAppSwitch] = useState<boolean>(true);
  const { logsState, setSession } = useLogs("PomadoroLogs", []);
  const { timerState, setTimer, resetTimer, toggleTimer, reduceTimeLeft } = useTimerState(defaultTimerState, setSession);

  useTimerWork(timerState, reduceTimeLeft);

  return (
    <div className={styles.content}>
      <Header
        leftIsActive={appSwitch}
        handleClick={() => {
          setAppSwitch(!appSwitch);
        }}
      />
      {appSwitch ? (
        <>
          <Timer timerState={timerState} setTimer={setTimer} toggleTimer={toggleTimer} resetTimer={resetTimer} />
          <Log log={logsState[logsState.length - 1]} />
        </>
      ) : (
        <MainLogs logsState={logsState} />
      )}
    </div>
  );
};
