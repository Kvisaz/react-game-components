import { ILog } from "../../interfaces/interfaces";
import { Log } from "../Log";
import styles from "./MainLogs.module.css";

interface IMainLogsProps {
  logsState: Array<ILog>;
}

export const MainLogs = ({ logsState }: IMainLogsProps) => {
  return (
    <ul className={styles.logs}>
      {logsState.map((log, index) => (
        <Log key={index} log={log} />
      ))}
    </ul>
  );
};
