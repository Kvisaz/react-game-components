import { Button, Grid2, Typography } from "@mui/material";

interface ISetTimeButtons {
  builtInLimits: Array<number>;
  selectedTime: number;
  setTimer: (limit: number) => void;
  setSelectedTime: (index: number) => void;
}

export const SetTimeButtons = ({ builtInLimits, selectedTime, setTimer, setSelectedTime }: ISetTimeButtons) => {
  return (
    <Grid2 container spacing={2} sx={{ justifyContent: "center" }}>
      {builtInLimits.map((limit, index) => (
        <Grid2 key={index}>
          <Button
            size="medium"
            sx={{ width: "60px", height: "30px", borderRadius: 0, padding: 0, display: "flex", alignContent: "center", justifyContent: "center" }}
            color={selectedTime === index ? "success" : "inherit"}
            variant={selectedTime === index ? "contained" : "outlined"}
            onClick={() => {
              setTimer(limit);
              setSelectedTime(index);
            }}
          >
            <Typography>{limit} min</Typography>
          </Button>
        </Grid2>
      ))}
    </Grid2>
  );
};
