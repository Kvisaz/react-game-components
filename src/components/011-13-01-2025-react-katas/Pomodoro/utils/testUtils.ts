import { ILog } from "../interfaces/interfaces";
import { formatDateToDMY, formatDateToHMNumber } from "./pomodoroUtils";

export const getDatesWithStep = (startDays = 0, count = 5, step = 1, isAdding = true) => {
  return Array.from({ length: count }, (_, i) => {
    const date = new Date();
    const doStep = i * step;
    date.setDate(date.getDate() + startDays + (isAdding ? +doStep : -doStep));
    return date;
  });
};

export const dataArrayForTestLogs: Array<ILog> = getDatesWithStep(0, Math.floor(Math.random() * 6) + 6, Math.floor(Math.random() * 3) + 1, false).map(
  (date) => {
    const numberOfSessions = Math.floor(Math.random() * 12) + 1;
    return {
      dateString: formatDateToDMY(date),
      time: numberOfSessions * 60,
      sessions: Array.from({ length: numberOfSessions }, (_, i) => {
        const newDate = (oldDate: Date, addedHours: number) => {
          oldDate.setHours(oldDate.getHours() + addedHours);
          return oldDate;
        };
        return {
          start: formatDateToHMNumber(newDate(date, i)),
          time: 60 * 60,
          end: formatDateToHMNumber(newDate(date, i + 1)),
        };
      }),
    };
  }
);
