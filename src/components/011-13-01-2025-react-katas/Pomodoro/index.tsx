import "./styles/Pomodoro.css";

import { useState } from "react";
import { useTimerState } from "./hooks/useTimerState";
import { ITimerState } from "./interfaces/interfaces";
import { useTimerWork } from "./hooks/useTimerWork";
import { useLogs } from "./hooks/useLogs";
import { Box, Button, ButtonGroup, Container, Stack, Typography } from "@mui/material";
import { formatTime } from "./utils/pomodoroUtils";
import { Pause, PlayArrow, Replay } from "@mui/icons-material";

import { TodayLog } from "./components/TodayLog";
import { Logs } from "./components/Logs";
import { SetTimeButtons } from "./components/SetTimeButtons";

const defaultTimerState: ITimerState = {
  timeLeft: 5,
  resetLimit: 5,
  startNumber: 5,
  isActive: false,
  builtInLimits: [1, 5, 10, 15, 20, 25, 30],
  userLimit: 0,
};

export const Pomodoro = () => {
  const [selectedApp, setSelectedApp] = useState<boolean>(true);
  const [selectedTime, setSelectedTime] = useState<number>(1);
  const { logsState, setSession, clearLogs } = useLogs("PomadoroLogs", []);
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
            <SetTimeButtons builtInLimits={timerState.builtInLimits} selectedTime={selectedTime} setTimer={setTimer} setSelectedTime={setSelectedTime} />

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
          <TodayLog log={logsState[logsState.length - 1]} />
        </Box>
      ) : (
        <Logs logs={logsState} clearLogs={clearLogs} />
      )}
    </Container>
  );
};
