import { useState } from "react";
import { Session } from "../Session";
import styles from "./Log.module.css";
import { ILog } from "../../interfaces/interfaces";
import { formatHMNumberToHMString } from "../../utils/pomodoroUtils";

interface ILogProps {
  log?: ILog;
}

export const Log = ({ log }: ILogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return log !== undefined ? (
    <li className={styles.log}>
      <div className={styles.head}>
        <b>День:</b> {log.dateString}
        <div className={styles.separator} />
        <b>Время:</b> {formatHMNumberToHMString(log.time)}
        <div className={styles.separator} />
        <b>Сессий:</b> {log.sessions.length}
        {log !== undefined ? (
          <button onClick={handleClick} className={styles.openButton}>
            Открыть
          </button>
        ) : null}
      </div>

      {isOpen ? (
        <ul className={styles.sessions}>
          {log !== undefined
            ? log.sessions.map((session, index) => (session.end !== 0 ? <Session key={index} session={session} index={index + 1} /> : null))
            : null}
        </ul>
      ) : null}
    </li>
  ) : null;
};
