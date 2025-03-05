import { ILog } from "../../interfaces/interfaces";
import { Deprecated_Log } from "../Deprecated_Log";
import styles from "./Deprecated_MainLogs.module.css";

interface IMainLogsProps {
  logsState: Array<ILog>;
}

export const Deprecated_MainLogs = ({ logsState }: IMainLogsProps) => {
  return (
    <ul className={styles.logs}>
      {logsState.map((log, index) => (
        <Deprecated_Log key={index} log={log} />
      ))}
    </ul>
  );
};
