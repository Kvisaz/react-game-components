import { Box, Typography } from "@mui/material";
import { Log } from "../Log";

export const TodayLog = ({ log }: { log?: ILog }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Сегодня:
      </Typography>
      <Box>{log ? <Log {...log} /> : <Typography>Ничего не было!</Typography>}</Box>
    </Box>
  );
};
