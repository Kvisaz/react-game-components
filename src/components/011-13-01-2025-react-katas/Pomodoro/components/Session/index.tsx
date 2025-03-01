import { ISession } from "../../interfaces/interfaces";
import { formatHMNumberToHMString, formatTime } from "../../utils/pomodoroUtils";
import styles from "./Session.module.css";
interface ISesstionProps {
  session: ISession;
  index: number;
}
export const Session = ({ session, index }: ISesstionProps) => {
  return (
    <li className={styles.container}>
      {index}. Время: {formatTime(session.time)}. Начало: {formatHMNumberToHMString(session.start)}. Конец: {formatHMNumberToHMString(session.end)}
    </li>
  );
};
