import { useEffect, useState } from "react";
import { ILog, ISession } from "../interfaces/interfaces";
import { formatDateToDMY, formatDateToHMNumber } from "../utils/pomodoroUtils";

export const useLogs = (key: string, initialValue: Array<ILog>) => {
  const [logsState, setLogsState] = useState<Array<ILog>>(() => {
    try {
      const savedData = localStorage.getItem(key);
      if (savedData) {
        const parsedData: Array<ILog> = JSON.parse(savedData);
        if (parsedData.length > 0) {
          return parsedData;
        }
      }
    } catch (error) {
      console.error(`Error load from localStorage key "${key}":`, error);
    }
    return initialValue;
  });

  useEffect(() => {
    try {
      if (logsState.length > 0) {
        const valueToStore = JSON.stringify(logsState);
        localStorage.setItem(key, valueToStore);
      }
    } catch (error) {
      console.error(`Error saving to localStorage key "${key}":`, error);
    }
  }, [key, logsState]);

  const clearLogs = () => {
    localStorage.removeItem(key);
    setLogsState([]);
  };

  const setSession = (isStart: boolean, time: number) => {
    setLogsState((previusState) => {
      if (isStart) {
        if (previusState.length === 0 || previusState[previusState.length - 1].dateString !== formatDateToDMY(new Date())) {
          return [
            ...previusState,
            {
              dateString: formatDateToDMY(new Date()),
              time: 0,
              sessions: [
                {
                  start: formatDateToHMNumber(new Date()),
                  end: 0,
                  time: 0,
                },
              ],
            },
          ];
        } else {
          const lastLog: ILog = previusState[previusState.length - 1];
          const newSessions: Array<ISession> = [...lastLog.sessions, { start: formatDateToHMNumber(new Date()), end: 0, time: 0 }];

          return [
            ...previusState.slice(0, previusState.length - 1),
            {
              ...lastLog,
              sessions: newSessions,
            },
          ];
        }
      } else {
        const lastLog: ILog = previusState[previusState.length - 1];
        const lastSession: ISession = lastLog.sessions[lastLog.sessions.length - 1];
        const newSessions: Array<ISession> = [
          ...lastLog.sessions.slice(0, lastLog.sessions.length - 1),
          {
            ...lastSession,
            end: formatDateToHMNumber(new Date()),
            time: time,
          },
        ];
        return [
          ...previusState.slice(0, previusState.length - 1),
          {
            ...lastLog,
            time: lastLog.time + time,
            sessions: newSessions,
          },
        ];
      }
    });
  };

  return { logsState, setSession, clearLogs };
};
