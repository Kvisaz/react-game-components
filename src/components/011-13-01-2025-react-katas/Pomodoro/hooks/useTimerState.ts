import { useState } from "react";
import { ITimerState } from "../interfaces/interfaces";

export const useTimerState = (defaultTimerState: ITimerState, setSession: (isStart: boolean, time: number) => void) => {
  const [timerState, setTimerState] = useState<ITimerState>({ ...defaultTimerState, timeLeft: defaultTimerState.timeLeft * 60 });

  const setTimer = (limit?: number) => {
    setTimerState((previusTimeState) => {
      const newTimeLeft = (limit !== undefined ? limit : previusTimeState.userLimit) * 60;
      return {
        ...previusTimeState,
        lastUsedLimit: newTimeLeft,
        timeLeft: newTimeLeft,
      };
    });
  };

  const resetTimer = () => {
    setTimerState((previusTimeState) => {
      return { ...previusTimeState, timeLeft: previusTimeState.resetLimit, isActive: false };
    });
  };

  const toggleTimer = () => {
    setTimerState((previusState) => {
      // let newStartNumber = 0;
      // if (previusTimeState.isActive === false) {

      // } else {

      // }
      // const newStartNumber = previusTimeState.isActive ?
      if (previusState.isActive) {
        setSession(false, previusState.startNumber - previusState.timeLeft);
      } else {
        setSession(true, 0);
      }

      return {
        ...previusState,
        startNumber: previusState.isActive ? previusState.startNumber : previusState.timeLeft,
        isActive: !previusState.isActive,
      };
    });
  };

  const reduceTimeLeft = () => {
    setTimerState((previusState) => {
      if (previusState.timeLeft <= 0) {
        setSession(false, previusState.startNumber - previusState.timeLeft);
        return {
          ...previusState,
          isActive: false,
          timeLeft: 0,
        };
      }
      return {
        ...previusState,
        timeLeft: previusState.timeLeft - 1,
      };
    });
  };

  return { timerState, setTimer, resetTimer, toggleTimer, reduceTimeLeft };
};
