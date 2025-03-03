import styles from "./Pomodoro.module.css";
import "./styles/Pomodoro.css";

import { useState } from "react";
import { Header } from "./components/Header";
import { Timer } from "./components/Timer";
import { useTimerState } from "./hooks/useTimerState";
import { ILog, ITimerState } from "./interfaces/interfaces";
import { useTimerWork } from "./hooks/useTimerWork";
import { MainLogs } from "./components/MainLogs";
import { useLogs } from "./hooks/useLogs";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import { formatDateToDMY, formatDateToHMNumber, formatHMNumberToHMString, formatTime } from "./utils/pomodoroUtils";
import { Done, Pause, PlayArrow, Replay } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import { getDatesWithStep } from "./utils/testUtils";

const defaultTimerState: ITimerState = {
  timeLeft: 5,
  resetLimit: 5,
  startNumber: 5,
  isActive: false,
  builtInLimits: [1, 5, 10, 15, 20, 25, 30],
  userLimit: 0,
};

// ((a = new Date()) => {a.setHours(a.getHours() + 1); return a;})()
const dataArrayForTestLogs: Array<ILog> = getDatesWithStep(0, Math.floor(Math.random() * 6) + 6, Math.floor(Math.random() * 3) + 1, false).map((date) => {
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
});

const LogMaterialUI = ({ dateString, time, sessions }: ILog) => {
  return (
    <Accordion sx={{ width: "100%" }}>
      <AccordionSummary aria-controls="panel-content" sx={{ bgcolor: blue["100"] }}>
        <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
          <Typography>{dateString}</Typography>
          <Typography>Время: {formatHMNumberToHMString(time)}</Typography>
          <Typography>Сессий: {sessions.length}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 1 }}>
        <List>
          {sessions.map((session, index) => (
            <ListItem key={index} sx={{ px: 1, py: 1 }}>
              <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                <Typography variant={"body2"} sx={{ width: 16 }}>
                  {index + 1}
                </Typography>
                <Typography variant={"body2"}>Время: {formatTime(session.time)}</Typography>
                <Typography variant={"body2"}>Начало: {formatHMNumberToHMString(session.start)}</Typography>
                <Typography variant={"body2"}>Конец: {formatHMNumberToHMString(session.end)}</Typography>
              </Stack>
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

const MiniLog = ({ log }: { log?: ILog }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Сегодня:
      </Typography>
      <Box>{log ? <LogMaterialUI {...log} /> : <Typography>Ничего не было!</Typography>}</Box>
    </Box>
  );
};

const Logs = ({ logs }: { logs: Array<ILog> }) => {
  return (
    <Box sx={{ boxShadow: 3, p: 4 }}>
      <Typography variant="h4">Логи:</Typography>
      <List>
        {logs.map((log, index) => (
          <ListItem key={index} sx={{ px: 1, py: 1 }}>
            <LogMaterialUI key={index} {...log} />
          </ListItem>
        ))}
      </List>
      {/* {logs.map((log, index) => (
        
      ))} */}
    </Box>
  );
};

export const Pomodoro = () => {
  const [selectedApp, setSelectedApp] = useState<boolean>(true);
  const [selectedTime, setSelectedTime] = useState<number>(1);
  const { logsState, setSession } = useLogs("PomadoroLogs", dataArrayForTestLogs);
  const { timerState, setTimer, resetTimer, toggleTimer, reduceTimeLeft } = useTimerState(defaultTimerState, setSession);

  useTimerWork(timerState, reduceTimeLeft);

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        py: 4,
        px: { xs: 2, sm: 3 },
      }}
    >
      <ButtonGroup
        fullWidth
        variant="outlined"
        size="large"
        sx={{
          mb: 2,
          "& .MuiButton-root:first-of-type": {
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
          },
          "& .MuiButton-root:last-of-type": {
            borderTopRightRadius: 16,
            borderBottomRightRadius: 16,
          },
        }}
      >
        {["Помодоро", "Логи"].map((text, index) => (
          <Button
            key={index}
            variant={(selectedApp && index === 0) || (!selectedApp && index === 1) ? "contained" : "outlined"}
            onClick={() => setSelectedApp((previusSelectedApp) => !previusSelectedApp)}
          >
            {text}
          </Button>
        ))}
      </ButtonGroup>

      {selectedApp ? (
        <Box sx={{ "> *": { boxShadow: 3 }, "> :not(:last-child)": { mb: 4 } }}>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 3,
              p: 2,
              "> :not(:last-child)": {
                mb: 4,
              },
            }}
          >
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ "& .MuiButton-root": { flex: 1, borderRadius: 0 } }}>
              {timerState.builtInLimits.map((limit, index) => (
                <Button
                  color={selectedTime === index ? "success" : "inherit"}
                  variant={selectedTime === index ? "contained" : "outlined"}
                  onClick={() => {
                    setTimer(limit);
                    setSelectedTime(index);
                  }}
                >
                  {limit} min
                </Button>
              ))}
            </Stack>

            <Typography
              variant="h1"
              align="center"
              sx={{
                fontSize: "6rem",
                fontWeight: "bold",
                color: "text.primary",
              }}
            >
              {formatTime(timerState.timeLeft)}
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{
                "& .MuiButton-root": { minWidth: 140, px: 4, py: 1 },
                "& .MuiSvgIcon-root": {
                  fontSize: "1rem", // Фиксированный размер иконок
                  width: "1em",
                  height: "1em",
                },
              }}
            >
              <Button
                variant="contained"
                color={timerState.isActive ? "secondary" : "primary"}
                startIcon={timerState.isActive ? <Pause /> : <PlayArrow />}
                onClick={toggleTimer}
              >
                {timerState.isActive ? "Пауза" : "Старт"}
              </Button>
              <Button variant="outlined" color="inherit" startIcon={<Replay />} onClick={resetTimer}>
                Сброс
              </Button>
            </Stack>
          </Box>
          <MiniLog log={logsState[logsState.length - 1]} />
        </Box>
      ) : (
        <Logs logs={logsState} />
      )}
    </Container>
  );
};
