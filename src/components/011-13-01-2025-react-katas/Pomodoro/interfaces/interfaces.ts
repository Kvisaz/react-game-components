export interface ISession {
  start: number;
  end: number;
  time: number;
}

export interface ILog {
  dateString: string;
  time: number;
  sessions: Array<ISession>;
}

// export interface ILogs {
//   logs: Array<ILog>;
// }

export interface ITimerState {
  timeLeft: number;
  resetLimit: number;
  startNumber: number;
  isActive: boolean;
  builtInLimits: Array<number>;
  userLimit: 0;
}
