import { Accordion, AccordionDetails, AccordionSummary, Divider, List, ListItem, Stack, Typography } from "@mui/material";
import { ILog } from "../../interfaces/interfaces";
import { formatHMNumberToHMString, formatTime } from "../../utils/pomodoroUtils";
import { blue } from "@mui/material/colors";

export const Log = ({ dateString, time, sessions }: ILog) => {
  return (
    <Accordion sx={{ width: "100%" }}>
      <AccordionSummary aria-controls="panel-content" sx={{ bgcolor: blue["100"] }}>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ "> .MuiTypography-root": { display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" } }}
        >
          <Typography>{dateString}</Typography>
          <Typography>Время: {formatHMNumberToHMString(time)}</Typography>
          <Typography>Сессий: {sessions.length}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {sessions.map((session, index) => (
            <ListItem key={index} disableGutters>
              <Stack
                direction="row"
                spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                divider={<Divider orientation="vertical" flexItem />}
                sx={{ "> .MuiTypography-root": { display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" } }}
              >
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
