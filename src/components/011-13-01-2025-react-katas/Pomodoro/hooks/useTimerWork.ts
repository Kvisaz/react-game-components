import { useEffect, useRef } from "react";
import { ITimerState } from "../interfaces/interfaces";

export const useTimerWork = (timerState: ITimerState, reduceTimeLeft: () => void) => {
  const expectedRef = useRef<number>(0);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const drift = now - expectedRef.current;

      reduceTimeLeft();

      expectedRef.current += 1000;
      const nextTick = Math.max(0, 1000 - drift);
      timerRef.current = setTimeout(tick, nextTick);
    };

    if (timerState.isActive) {
      expectedRef.current = Date.now() + 1000;
      timerRef.current = setTimeout(tick, 1000);
    }

    return () => timerRef.current && clearTimeout(timerRef.current);
  }, [timerState.isActive]);
};
